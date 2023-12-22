import { match } from "ts-pattern";
import { ElevationConfig, useConfiguratorStatusContext } from "../ConfiguratorStatusContext";
import { ColorToken, colorTokenToValue as _colorTokenToValue } from "./paletteUtils";
import prettier from "prettier/standalone";
import parserTypescript from "prettier/parser-typescript";

function uppercase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function colorTokenToVarName(colorToken: ColorToken): string {
  const tokenPart = `${colorToken.colorKey.replace("-", "")}`;
  if (colorToken.alpha === 100) {
    return tokenPart;
  }
  return `${tokenPart}_${colorToken.alpha}`;
}

function elevationToVarName(elevation: "small" | "medium" | "large"): string {
  return match(elevation)
    .with("small", () => "elevationSmall")
    .with("medium", () => "elevationMedium")
    .with("large", () => "elevationLarge")
    .exhaustive();
}

export function useConfigGeneratorTS(): () => string {
  const { tokens, colors, elevations, typography } = useConfiguratorStatusContext().theme;
  const colorTokenToValue = _colorTokenToValue(colors);

  function elevationToValue(elevation: ElevationConfig): string {
    return `${elevation.x}px ${elevation.y}px ${elevation.blur}px \${${colorTokenToVarName(
      elevation.color
    )}}`;
  }

  return () => {
    let prelude = `import { BentoTheme } from "@buildo/bento-design-system";`;
    prelude += `const remBaseSize = 16; const pixelToRem = (px: number) => \`\${
      px / remBaseSize
    }rem\`;`;

    const usedColors: Record<string, string> = {};
    Object.entries(tokens).forEach(([_, tokensSection]) => {
      Object.entries(tokensSection).forEach(([_, colorToken]) => {
        const rgba = colorTokenToValue(colorToken);
        if (rgba) {
          usedColors[colorTokenToVarName(colorToken)] = rgba;
        }
      });
    });
    Object.entries(elevations).forEach(([_, elevation]) => {
      const rgba = colorTokenToValue(elevation.color);
      if (rgba) {
        usedColors[colorTokenToVarName(elevation.color)] = rgba;
      }
    });

    const colorConsts = Object.entries(usedColors)
      .reduce((acc, [colorKey, color]) => {
        return [...acc, `const ${colorKey} = "${color}";`];
      }, [] as string[])
      .join("\n");

    let themeCode = "export const theme = {";

    // color tokens
    Object.entries(tokens).forEach(([key, tokensSection]) => {
      themeCode += `${key}: {`;
      Object.entries(tokensSection).forEach(([key2, colorToken]) => {
        themeCode += `${key2}: ${colorTokenToVarName(colorToken)},`;
      });
      themeCode += "},";
    });

    // outlines
    themeCode += `boxShadow: {`;
    Object.entries(tokens.outlineColor).forEach(([key, colorToken]) => {
      themeCode += `${key}: \`inset 0px 0px 0px 1px \${${colorTokenToVarName(colorToken)}}\`,`;
    });
    themeCode += `outlineInteractiveBottom: \`inset 0px 0px -1px 0px \${${colorTokenToVarName(
      tokens.outlineColor.outlineInteractive
    )}}\`,`;
    themeCode += `outlineDecorativeBottom: \`inset 0px 0px -1px 0px \${${colorTokenToVarName(
      tokens.outlineColor.outlineDecorative
    )}}\`,`;
    themeCode += `outlineNegativeStrong: \`inset 0px 0px 0px 2px \${${colorTokenToVarName(
      tokens.outlineColor.outlineNegative
    )}}\`,`;

    // elevations
    Object.entries(elevations).forEach(([key, value]) => {
      themeCode += `${elevationToVarName(
        key as "small" | "medium" | "large"
      )}: \`${elevationToValue(value)}\`,`;
    });
    themeCode += `},`;

    // typography
    themeCode += `fontFamily: { default: "${typography.fontFamily}" },`;
    themeCode += `fontSize: {`;
    Object.entries(typography.typographicScale).forEach(([kind, value]) => {
      Object.entries(value.sizes).forEach(([size, value]) => {
        themeCode += `${kind}${uppercase(size)}: pixelToRem(${value.fontSize}),`;
      });
    });
    themeCode += "},";
    themeCode += `lineHeight: {`;
    Object.entries(typography.typographicScale).forEach(([kind, value]) => {
      Object.entries(value.sizes).forEach(([size, value]) => {
        themeCode += `${kind}${uppercase(size)}: pixelToRem(${value.lineHeight}),`;
      });
    });
    themeCode += "},";
    themeCode += `fontWeight: {`;
    Object.entries(typography.typographicScale).forEach(([kind, value]) => {
      Object.entries(value.weights).forEach(([weight, value]) => {
        themeCode += `${kind}${weight === "regular" ? "" : uppercase(weight)}: "${value}",`;
      });
    });
    themeCode += "},";

    themeCode += "} satisfies BentoTheme;";

    return prettier.format([prelude, colorConsts, themeCode].join("\n\n"), {
      parser: "typescript",
      plugins: [parserTypescript],
    });
  };
}
