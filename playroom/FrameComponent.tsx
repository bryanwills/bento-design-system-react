import { Box } from "../stories";

export default function FrameComponent({ theme, children }) {
  return (
    <Box className={theme} background="backgroundPrimary">
      {children}
    </Box>
  );
}