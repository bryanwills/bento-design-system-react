import { DOMAttributes, useRef } from "react";
import { Popover, Box, Inset, List } from "..";
import { menuRecipe } from "./Menu.css";
import { useMenuTrigger } from "@react-aria/menu";
import { useMenuTriggerState, MenuTriggerState } from "@react-stately/menu";
import { useButton } from "@react-aria/button";
import { useBentoConfig } from "../BentoConfigContext";
import { MenuProps } from "./MenuProps";
import { useNestedMenu } from "./useNestedMenu";
import { processMenuItems } from "./NestedMenu";

export function Menu({
  items: _items,
  header,
  trigger,
  initialIsOpen,
  placement,
  offset,
  size,
  dividers,
  maxHeight,
  closeOnSelect,
  nestedMenuPlacement = "right top",
  nestedMenuOffset: _nestedMenuOffset,
}: MenuProps) {
  const config = useBentoConfig().menu;
  const nestedMenuOffset = _nestedMenuOffset ?? config.defaultOffset;
  const triggerRef = useRef(null);
  const overlayRef = useRef(null);

  const state = useMenuTriggerState({ defaultOpen: initialIsOpen });

  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, triggerRef);
  const { buttonProps: triggerProps } = useButton(
    { ...menuTriggerProps, elementType: "div" },
    triggerRef
  );

  const {
    nestedMenuTriggerRefs,
    nestedMenuState,
    open: openNestedMenu,
    close: closeNestedMenu,
    isOpen: isNestedMenuOpen,
  } = useNestedMenu(_items);

  const items = processMenuItems(
    _items,
    state,
    openNestedMenu,
    closeNestedMenu,
    isNestedMenuOpen,
    closeOnSelect,
    dividers,
    maxHeight,
    size,
    nestedMenuPlacement,
    nestedMenuOffset,
    nestedMenuState,
    nestedMenuTriggerRefs,
    overlayRef,
    config
  );

  return (
    <Box position="relative">
      {trigger(triggerRef, triggerProps, state)}
      {state.isOpen && (
        <Popover
          ref={overlayRef}
          onClose={() => {
            closeNestedMenu();
            state.close();
          }}
          triggerRef={triggerRef}
          placement={placement}
          offset={offset ?? config.defaultOffset}
        >
          <Box
            className={menuRecipe({ elevation: config.elevation })}
            // NOTE(gabro): the type of `autoFocus` does not match otherwise
            {...(menuProps as DOMAttributes<HTMLDivElement>)}
            borderRadius={config.radius}
            style={{ maxHeight }}
          >
            {header && (
              <Box
                background="backgroundSecondary"
                paddingX={config.headerPaddingX}
                paddingY={config.headerPaddingY}
              >
                {header}
              </Box>
            )}
            <Inset spaceY={config.paddingY}>
              <List items={items} size={size} dividers={dividers} />
            </Inset>
          </Box>
        </Popover>
      )}
    </Box>
  );
}

export type { MenuTriggerState };
export * from "./MenuProps";
