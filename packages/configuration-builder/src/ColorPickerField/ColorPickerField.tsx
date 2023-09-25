import {
  Box,
  FieldProps,
  control,
  useBentoConfig,
  getRadiusPropsFromConfig,
  Body,
  Field,
  Popover,
} from "@buildo/bento-design-system";
import { useRef } from "react";
import { useSelectState } from "@react-stately/select";
import { Section, Item } from "@react-stately/collections";
import { useSelect, HiddenSelect } from "@react-aria/select";
import { PalettesDropdown } from "./PalettesDropdown";
import { ThemeConfig } from "../ConfiguratorStatusContext";
import { useButton } from "@react-aria/button";
import { getPalette } from "../ColorEditor/Palette";
import { ColorConfig } from "../ColorEditor/ColorEditor";

type Props = FieldProps<string> & { colors: ThemeConfig["colors"] };

function getPaletteItemsSection(key: string, colorConfig: ColorConfig) {
  const paletteItems = getPalette(colorConfig).map((color, index) => (
    <Item key={`${key}-${index}`}>{color}</Item>
  ));
  return (
    <Section
      key={key}
      children={
        colorConfig.useReferenceAsKeyColor
          ? [...paletteItems, <Item key={`${key}-reference`}>{colorConfig.referenceColor}</Item>]
          : paletteItems
      }
    />
  );
}

function getColorItems(colors: ThemeConfig["colors"]) {
  return [
    <Section key="General">
      <Item key="white">white</Item>
      <Item key="black">black</Item>
    </Section>,
    getPaletteItemsSection("BrandPrimary", colors.brand[0]),
    getPaletteItemsSection("Interactive", colors.interactive),
    getPaletteItemsSection("Neutral", colors.neutral),
    getPaletteItemsSection("Informative", colors.semantic.informative),
    getPaletteItemsSection("Positive", colors.semantic.positive),
    getPaletteItemsSection("Warning", colors.semantic.warning),
    getPaletteItemsSection("Negative", colors.semantic.negative),
    getPaletteItemsSection("Grey", colors.dataVisualization.grey),
    getPaletteItemsSection("Red", colors.dataVisualization.red),
    getPaletteItemsSection("Orange", colors.dataVisualization.orange),
    getPaletteItemsSection("Yellow", colors.dataVisualization.yellow),
    getPaletteItemsSection("Green", colors.dataVisualization.green),
    getPaletteItemsSection("Jade", colors.dataVisualization.jade),
    getPaletteItemsSection("Blue", colors.dataVisualization.blue),
    getPaletteItemsSection("Indigo", colors.dataVisualization.indigo),
    getPaletteItemsSection("Violet", colors.dataVisualization.violet),
    getPaletteItemsSection("Pink", colors.dataVisualization.pink),
  ];
}

export function ColorPickerField(props: Props) {
  const inputConfig = useBentoConfig().input;
  const dropdownConfig = useBentoConfig().dropdown;

  const ref = useRef(null);

  const state = useSelectState({
    ...props,
    isDisabled: props.disabled,
    children: getColorItems(props.colors),
    onSelectionChange: (key) => {
      props.onChange(state.collection.getItem(key)!.textValue);
    },
  });

  const { labelProps, errorMessageProps, descriptionProps, triggerProps, valueProps, menuProps } =
    useSelect(
      {
        ...props,
        isDisabled: props.disabled,
      },
      state,
      ref
    );

  const { buttonProps } = useButton(
    {
      ...triggerProps,
      elementType: "div",
    },
    ref
  );

  return (
    <Field
      {...props}
      labelProps={labelProps}
      assistiveTextProps={descriptionProps}
      errorMessageProps={errorMessageProps}
    >
      <HiddenSelect
        isDisabled={props.disabled}
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <Box
        as="button"
        {...buttonProps}
        color={undefined}
        display="flex"
        cursor="pointer"
        outline="none"
        className={control({ validation: "valid", menuIsOpen: state.isOpen, isReadOnly: false })}
        disabled={props.disabled}
        {...getRadiusPropsFromConfig(inputConfig.radius)}
        paddingX={inputConfig.paddingX}
        paddingY={inputConfig.paddingY}
        ref={ref}
      >
        <Box {...valueProps} flexGrow={1} textAlign="left">
          <Body size={inputConfig.fontSize} color={props.disabled ? "disabled" : "primary"}>
            {props.value}
          </Body>
        </Box>
        <Box paddingLeft={16} aria-hidden="true">
          {dropdownConfig.openIndicatorIcon({
            size: dropdownConfig.openIndicatorIconSize,
            color: props.disabled ? "disabled" : "default",
          })}
        </Box>
      </Box>
      {state.isOpen && (
        <Popover triggerRef={ref} onClose={state.close}>
          <PalettesDropdown
            colors={props.colors}
            value={props.value}
            onChange={props.onChange}
            state={state}
            menuProps={menuProps}
          />
        </Popover>
      )}
    </Field>
  );
}
