import { LocalizedString } from "src";
import { Box } from "../../internal";
import { displayRecipe } from "./Display.css";

type Size = "small" | "medium" | "large";
type Align = "left" | "center" | "right";

type Props = {
  children: LocalizedString;
  size: Size;
  align?: Align;
};

export function Display({ children, size, align }: Props) {
  return (
    <Box as="span" className={displayRecipe({ size })} textAlign={align}>
      {children}
    </Box>
  );
}