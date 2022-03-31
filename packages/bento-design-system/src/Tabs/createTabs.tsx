import { usePress } from "@react-aria/interactions";
import { Box, Columns, Column, bentoSprinkles } from "../internal";
import { Children, IconProps, Label } from "..";
import { LocalizedString } from "../util/LocalizedString";
import { tabRecipe } from "./Tabs.css";
import { TabsConfig } from "./Config";
import { normalizeStatusValue } from "../internal/sprinkles.css";

export type TabsSize = "medium" | "large";

type Props<A> = {
  size: TabsSize;
  value: A;
  onChange: (v: A) => void;
  tabs: Array<{
    value: A;
    label: LocalizedString;
    disabled?: boolean;
    icon?: (props: IconProps) => Children;
    hasNotification?: boolean;
  }>;
};

export function createTabs(config: TabsConfig) {
  type TabProps = {
    size: TabsSize;
    label: LocalizedString;
    onPress: () => void;
    active: boolean;
    disabled?: boolean;
    icon?: (props: IconProps) => Children;
    hasNotification?: boolean;
  };
  function Tab({ size, active, onPress, label, disabled, icon, hasNotification }: TabProps) {
    const {
      pressProps: { color: ignored1, ...pressProps },
    } = usePress({ onPress, isDisabled: disabled });

    return (
      <Box
        tabIndex={active || disabled ? -1 : 0}
        className={tabRecipe({ active, kind: config.kind })}
        {...pressProps}
        disabled={disabled}
        borderTopRadius={config.kind === "folder" ? config.radius : undefined}
        paddingX={config.paddingX[size]}
        paddingY={config.paddingY[size]}
        position="relative"
        borderColor={
          config.kind === "underline"
            ? active
              ? normalizeStatusValue(config.lineColor).active
              : config.lineColor
            : undefined
        }
        borderBottomWidth={config.kind === "underline" ? config.lineHeight : undefined}
        borderStyle="solid"
      >
        <Columns space={config.internalSpacing} alignY="center">
          {icon && (
            <Column width="content">{icon({ size: config.iconSize, color: "inherit" })}</Column>
          )}
          <Label size={config.labelSize[size]} uppercase={config.uppercaseLabel}>
            {label}
          </Label>
          {hasNotification && (
            <Column width="content">
              <svg
                className={bentoSprinkles({
                  fill: config.notificationColor,
                })}
                width={config.notificationSize}
                viewBox="0 0 24 24"
              >
                <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Z" />
              </svg>
            </Column>
          )}
        </Columns>
      </Box>
    );
  }

  return function Tabs<A>({ size, value, tabs, onChange }: Props<A>) {
    return (
      <Columns
        space={config.spaceBetweenTabs}
        align={config.tabsWidth === "fit-content" ? config.tabsAlignment : undefined}
      >
        {tabs.map((t) => (
          <Column key={t.label} width={config.tabsWidth === "fit-content" ? "content" : undefined}>
            <Tab
              size={size}
              label={t.label}
              onPress={() => onChange(t.value)}
              active={value === t.value}
              disabled={t.disabled}
              icon={t.icon}
              hasNotification={t.hasNotification}
            />
          </Column>
        ))}
      </Columns>
    );
  };
}

export type { Props as TabsProps };
