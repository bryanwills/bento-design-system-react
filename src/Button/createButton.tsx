import { LocalizedString } from "../util/LocalizedString";
import { Box } from "../internal/Box/Box";
import { buttonRecipe } from "./Button.css";
import { ComponentProps, useRef } from "react";
import { AriaButtonProps } from "@react-types/button";
import { useButton } from "@react-aria/button";
import { Label } from "../Typography/Label/Label";
import { BentoSprinkles } from "../internal";

type Size = "small" | "medium" | "large";
export type ButtonProps = {
  label: LocalizedString;
  onPress: () => void;
  kind: "solid" | "transparent";
  hierarchy: "primary" | "secondary" | "danger";
  isDisabled?: boolean;
  size?: Size;
} & AriaButtonProps<"button">;

type SizeConfig<T> = {
  [k in Size]: T;
};

export type ButtonConfig = {
  paddingX: SizeConfig<BentoSprinkles["paddingX"]>;
  paddingY: SizeConfig<BentoSprinkles["paddingY"]>;
  labelSize: ComponentProps<typeof Label>["size"];
  radius: BentoSprinkles["borderRadius"];
};

export const defaultButtonConfig: ButtonConfig = {
  paddingX: {
    small: 8,
    medium: 16,
    large: 16,
  },
  paddingY: {
    small: 4,
    medium: 8,
    large: 16,
  },
  labelSize: "large",
  radius: 8,
};

export function createButton(config: ButtonConfig = defaultButtonConfig) {
  return function Button(props: ButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(props, ref);
    const { onKeyDown, onKeyUp } = props;

    const size = props.size || "medium";

    return (
      <Box
        as="button"
        ref={ref}
        className={buttonRecipe({
          kind: props.kind,
          hierarchy: props.hierarchy,
          size,
        })}
        {...buttonProps}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        paddingX={config.paddingX[size]}
        paddingY={config.paddingY[size]}
        borderRadius={config.radius}
      >
        <Label size={config.labelSize}>{props.label}</Label>
      </Box>
    );
  };
}
