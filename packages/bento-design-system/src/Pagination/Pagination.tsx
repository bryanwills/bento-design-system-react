import {
  Body,
  Box,
  Button,
  Column,
  Columns,
  Divider,
  IconButton,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  Inline,
  Inset,
  LocalizedString,
  Menu,
  PaginationItemsPerPage,
  unsafeLocalizedString,
} from "..";
import { useBentoConfig } from "../BentoConfigContext";

export type PaginationMessages = {
  itemsPerPageOptionsLabel: LocalizedString;
  currentPageItemsLabel: (start: number, end: number, total: number) => LocalizedString;
  pageCountLabel: (pageCount: number) => LocalizedString;
  singlePageLabel: LocalizedString;
  previousPageButtonLabel: LocalizedString;
  nextPageButtonLabel: LocalizedString;
};

type Props = {
  page: number;
  pageCount: number;
  itemsPerPage: PaginationItemsPerPage;
  itemsPerPageOptions: Record<PaginationItemsPerPage, LocalizedString>;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: PaginationItemsPerPage) => void;
  messages: PaginationMessages;
};

type DropdownButtonProps = {
  label: LocalizedString;
  onPress: () => void;
  disabled?: boolean;
};

function DropdownButton({ label, onPress, disabled }: DropdownButtonProps) {
  const config = useBentoConfig().pagination;
  return (
    <Button
      kind={config.dropdownButtonKind}
      hierarchy="secondary"
      label={label}
      icon={IconChevronDown}
      iconPosition="trailing"
      onPress={onPress}
      isDisabled={disabled}
    />
  );
}

export function Pagination(props: Props) {
  const {
    page,
    pageCount,
    itemsPerPage,
    itemsPerPageOptions,
    onPageChange,
    onItemsPerPageChange,
    messages,
  } = props;

  const config = useBentoConfig().pagination;

  const divider = config.showDivider && (
    <Column width="content">
      <Divider orientation="vertical" />
    </Column>
  );

  return (
    <Inset spaceX={24}>
      <Columns space={24} alignY="stretch">
        <Column width="content">
          <Box height="full" display="flex" alignItems="center" paddingY={config.paddingY}>
            <Inline space={8} alignY="center">
              <Menu
                size="medium"
                trigger={(ref, triggerProps, { toggle }) => (
                  <Box ref={ref} display="inline-block" {...triggerProps} outline="none">
                    <DropdownButton label={unsafeLocalizedString(itemsPerPage)} onPress={toggle} />
                  </Box>
                )}
                items={Object.entries(itemsPerPageOptions).map(([n, label]) => ({
                  label,
                  onPress: () => onItemsPerPageChange(parseInt(n) as PaginationItemsPerPage),
                }))}
                closeOnSelect
              />
              <Body size="medium" color="secondary">
                {messages.itemsPerPageOptionsLabel}
              </Body>
            </Inline>
          </Box>
        </Column>
        {divider}
        <Box height="full" display="flex" alignItems="center">
          <Body size="medium" color="secondary">
            {messages.currentPageItemsLabel(
              (page - 1) * itemsPerPage + 1,
              page * itemsPerPage,
              pageCount * itemsPerPage
            )}
          </Body>
        </Box>
        {divider}
        <Box
          height="full"
          width="full"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingY={config.paddingY}
        >
          <Columns space={8} alignY="center">
            {pageCount === 1 ? (
              <Body size="medium" color="secondary">
                {messages.singlePageLabel}
              </Body>
            ) : (
              <Inline space={8} alignY="center">
                <Menu
                  size="medium"
                  trigger={(ref, triggerProps, { toggle }) => (
                    <Box ref={ref} display="inline-block" {...triggerProps} outline="none">
                      <DropdownButton
                        label={unsafeLocalizedString(page)}
                        onPress={toggle}
                        disabled={pageCount === 1}
                      />
                    </Box>
                  )}
                  items={Array.from(Array(pageCount).keys()).map((n) => ({
                    label: unsafeLocalizedString(n + 1),
                    onPress: () => onPageChange(n + 1),
                  }))}
                  closeOnSelect
                />
                <Body size="medium" color="secondary">
                  {messages.pageCountLabel(pageCount)}
                </Body>
              </Inline>
            )}
            <Column width="content">
              <Inline space={config.navigationButtonSpacing}>
                <IconButton
                  kind={config.navigationButtonKind}
                  hierarchy="secondary"
                  icon={IconChevronLeft}
                  label={messages.previousPageButtonLabel}
                  size={24}
                  onPress={() => onPageChange(page - 1)}
                  isDisabled={page === 1}
                />
                <IconButton
                  kind={config.navigationButtonKind}
                  hierarchy="secondary"
                  icon={IconChevronRight}
                  label={messages.nextPageButtonLabel}
                  size={24}
                  onPress={() => onPageChange(page + 1)}
                  isDisabled={page === pageCount}
                />
              </Inline>
            </Column>
          </Columns>
        </Box>
      </Columns>
    </Inset>
  );
}
