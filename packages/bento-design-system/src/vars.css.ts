import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  fontFamily: {
    default: null,
  },
  fontWeight: {
    body: null,
    bodyStrong: null,
    display: null,
    headline: null,
    label: null,
    title: null,
  },
  fontSize: {
    bodySmall: null,
    bodyMedium: null,
    bodyLarge: null,
    displaySmall: null,
    displayMedium: null,
    displayLarge: null,
    headlineSmall: null,
    headlineMedium: null,
    headlineLarge: null,
    labelSmall: null,
    labelMedium: null,
    labelLarge: null,
    titleSmall: null,
    titleMedium: null,
    titleLarge: null,
  },
  lineHeight: {
    bodySmall: null,
    bodyMedium: null,
    bodyLarge: null,
    displaySmall: null,
    displayMedium: null,
    displayLarge: null,
    headlineSmall: null,
    headlineMedium: null,
    headlineLarge: null,
    labelSmall: null,
    labelMedium: null,
    labelLarge: null,
    titleSmall: null,
    titleMedium: null,
    titleLarge: null,
  },
  letterSpacing: {
    1: null,
    2: null,
  },
  space: {
    0: null,
    4: null,
    8: null,
    16: null,
    24: null,
    32: null,
    40: null,
    80: null,
  },
  negativeSpace: {
    0: null,
    // NOTE(gabro): ideally we would use "-4" and so on here, but we can't due to
    // https://github.com/Swatinem/rollup-plugin-dts/issues/201
    negative4: null,
    negative8: null,
    negative16: null,
    negative24: null,
    negative32: null,
    negative40: null,
    negative80: null,
  },
  radius: {
    4: null,
    8: null,
    16: null,
  },
  brandColor: {
    brandPrimary: null,
    brandSecondary: null,
    brandTertiary: null,
  },
  backgroundColor: {
    backgroundPrimary: null,
    backgroundSecondary: null,
    backgroundOverlay: null,
    backgroundPrimaryInverse: null,
    backgroundSecondaryInverse: null,
    backgroundInteractive: null,
    backgroundInteractiveOverlay: null,
    backgroundInformative: null,
    backgroundPositive: null,
    backgroundWarning: null,
    backgroundNegative: null,
    backgroundLightScrim: null,
    backgroundDarkScrim: null,
  },
  foregroundColor: {
    foregroundPrimary: null,
    foregroundSecondary: null,
    foregroundPrimaryInverse: null,
    foregroundSecondaryInverse: null,
    foregroundInteractive: null,
    foregroundInformative: null,
    foregroundPositive: null,
    foregroundWarning: null,
    foregroundNegative: null,
    foregroundDisabled: null,
  },
  textColor: {
    textPrimary: null,
    textSecondary: null,
    textPrimaryInverse: null,
    textSecondaryInverse: null,
    textInteractive: null,
    textInformative: null,
    textPositive: null,
    textWarning: null,
    textNegative: null,
    textDisabled: null,
  },
  interactiveBackgroundColor: {
    primarySolidEnabledBackground: null,
    primarySolidHoverBackground: null,
    primarySolidFocusBackground: null,
    primaryTransparentEnabledBackground: null,
    primaryTransparentHoverBackground: null,
    primaryTransparentFocusBackground: null,
    secondarySolidEnabledBackground: null,
    secondarySolidHoverBackground: null,
    secondarySolidFocusBackground: null,
    secondaryTransparentEnabledBackground: null,
    secondaryTransparentHoverBackground: null,
    secondaryTransparentFocusBackground: null,
    dangerSolidEnabledBackground: null,
    dangerSolidHoverBackground: null,
    dangerSolidFocusBackground: null,
    dangerTransparentEnabledBackground: null,
    dangerTransparentHoverBackground: null,
    dangerTransparentFocusBackground: null,
    disabledSolidBackground: null,
    disabledTransparentBackground: null,
  },
  interactiveForegroundColor: {
    primarySolidEnabledForeground: null,
    primarySolidHoverForeground: null,
    primarySolidFocusForeground: null,
    primaryTransparentEnabledForeground: null,
    primaryTransparentHoverForeground: null,
    primaryTransparentFocusForeground: null,
    secondarySolidEnabledForeground: null,
    secondarySolidHoverForeground: null,
    secondarySolidFocusForeground: null,
    secondaryTransparentEnabledForeground: null,
    secondaryTransparentHoverForeground: null,
    secondaryTransparentFocusForeground: null,
    dangerSolidEnabledForeground: null,
    dangerSolidHoverForeground: null,
    dangerSolidFocusForeground: null,
    dangerTransparentEnabledForeground: null,
    dangerTransparentHoverForeground: null,
    dangerTransparentFocusForeground: null,
    disabledSolidForeground: null,
    disabledTransparentForeground: null,
    linkEnabled: null,
    linkHover: null,
    linkFocus: null,
    linkDisabled: null,
  },
  outlineColor: {
    outlineInteractive: null,
    outlineDecorative: null,
    outlineContainer: null,
    outlineInputEnabled: null,
    outlineInputHover: null,
    outlineInputFocus: null,
    outlineInputDisabled: null,
    outlineInformative: null,
    outlinePositive: null,
    outlineWarning: null,
    outlineNegative: null,
  },
  dataVisualizationColor: {
    softGrey: null,
    softRed: null,
    softOrange: null,
    softYellow: null,
    softGreen: null,
    softJade: null,
    softBlue: null,
    softIndigo: null,
    softViolet: null,
    softPink: null,
    brightGrey: null,
    brightRed: null,
    brightOrange: null,
    brightYellow: null,
    brightGreen: null,
    brightJade: null,
    brightBlue: null,
    brightIndigo: null,
    brightViolet: null,
    brightPink: null,
  },
  boxShadow: {
    outlineInteractive: null,
    outlineInteractiveBottom: null,
    outlineDecorative: null,
    outlineDecorativeBottom: null,
    outlineContainer: null,
    outlineInputEnabled: null,
    outlineInputHover: null,
    outlineInputFocus: null,
    outlineInputDisabled: null,
    outlineInformative: null,
    outlinePositive: null,
    outlineWarning: null,
    outlineNegative: null,
    outlineNegativeStrong: null,
    elevationSmall: null,
    elevationMedium: null,
    elevationLarge: null,
  },
  zIndex: {
    modalUnderlay: null,
    selectFieldMenu: null,
    selectFieldMenuInModal: null,
  },
});