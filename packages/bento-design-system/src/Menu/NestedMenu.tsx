import { FocusScope } from "@react-aria/focus";
import { useMenuTrigger } from "@react-aria/menu";
import { useOverlayPosition } from "@react-aria/overlays";
import { MenuTriggerState } from "@react-stately/menu";
import { ComponentProps, DOMAttributes, RefObject, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Box, Inset, List, ListItemProps, ListProps, Popover } from "..";
import { useBentoConfig } from "../BentoConfigContext";
import { menuRecipe } from "./Menu.css";
import { MenuItemProps, NestedMenuProps } from "./MenuProps";
import { useNestedMenu } from "./useNestedMenu";
import { MenuConfig } from "./Config";

function NestedMenu({
  label,
  items: _items,
  isSelected,
  placement,
  offset,
  size,
  state,
  triggerRef,
  overlayRef,
  closeOnSelect,
  dividers,
  maxHeight,
}: NestedMenuProps) {
  const config = useBentoConfig().menu;
  const componentRef = useRef(null);

  const { nestedMenuTriggerRefs, nestedMenuState, open, close, isOpen } = useNestedMenu(_items);

  const items = processMenuItems(
    _items,
    state,
    open,
    close,
    isOpen,
    closeOnSelect,
    dividers,
    maxHeight,
    size,
    placement,
    offset,
    nestedMenuState,
    nestedMenuTriggerRefs,
    overlayRef,
    config
  );

  const { menuProps } = useMenuTrigger({}, state, triggerRef);
  const { overlayProps: positionProps } = useOverlayPosition({
    containerPadding: 0,
    targetRef: triggerRef,
    overlayRef: componentRef,
    isOpen: isSelected,
    placement,
    offset,
  });

  useEffect(() => {
    if (!isSelected) close();
  }, [isSelected, close]);

  const nestedMenuPortal = createPortal(
    <FocusScope restoreFocus>
      <Box
        ref={componentRef}
        className={menuRecipe({ elevation: config.elevation })}
        {...(menuProps as DOMAttributes<HTMLDivElement>)}
        borderRadius={config.radius}
        style={{ maxHeight, ...positionProps.style }}
      >
        <Inset spaceY={config.paddingY}>
          <List items={items} size={size} dividers={dividers} />
        </Inset>
      </Box>
    </FocusScope>,
    overlayRef.current ?? document.body
  );

  return (
    <Box>
      {label}
      {isSelected ? nestedMenuPortal : null}
    </Box>
  );
}

export function processMenuItems(
  items: MenuItemProps[],
  state: MenuTriggerState,
  open: (item: MenuItemProps) => void,
  close: () => void,
  isOpen: (item: MenuItemProps) => boolean,
  closeOnSelect: boolean | undefined,
  dividers: boolean | undefined,
  maxHeight: number | undefined,
  size: ListProps["size"],
  nestedMenuPlacement: ComponentProps<typeof Popover>["placement"],
  nestedMenuOffset: ComponentProps<typeof Popover>["offset"],
  nestedMenuState: MenuTriggerState,
  nestedMenuTriggers: Array<RefObject<HTMLElement>>,
  overlayRef: RefObject<HTMLElement>,
  config: MenuConfig
): ListItemProps[] {
  const processCloseOnSelect = (item: ListItemProps) => {
    if (closeOnSelect && item.onPress) {
      const onPress = item.onPress;
      return {
        ...item,
        onPress: () => {
          close(); // close same-level nested menu that may be open
          state.close(); // close self
          onPress();
        },
      };
    } else {
      return item;
    }
  };

  return items.map((item, index) => {
    if (item.items) {
      const { items: nestedItems, label, ...itemProps } = item;
      return {
        ...itemProps,
        label: (
          <NestedMenu
            label={label}
            items={nestedItems}
            isSelected={isOpen(item)}
            placement={nestedMenuPlacement}
            offset={nestedMenuOffset}
            size={size}
            state={nestedMenuState}
            triggerRef={nestedMenuTriggers[index]}
            overlayRef={overlayRef}
            closeOnSelect={closeOnSelect}
            dividers={dividers}
            maxHeight={maxHeight}
          />
        ),
        ref: nestedMenuTriggers[index],
        trailingIcon: config.nestedMenuIcon,
        onPress: () => {
          if (isOpen(item)) close();
          else open(item);
        },
      } as ListItemProps;
    } else {
      return processCloseOnSelect(item);
    }
  });
}
