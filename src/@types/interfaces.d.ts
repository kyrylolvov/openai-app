type MergeExclusive<FirstType, SecondType> = import('type-fest').MergeExclusive<
FirstType,
SecondType
>;
type Interpolation<Props> = import('@emotion/serialize').Interpolation<Props>;
type Theme = import('@mui/material').Theme;

type CSSWithTheme = Interpolation<Theme>;

interface EmotionCSSVariant1 {
  cssProp?: CSSWithTheme
}
interface EmotionCSSVariant2 {
  cssProp?: CSSWithTheme
  cssPropEdgeCase?: CSSWithTheme
}
type EmotionCSSVariants = MergeExclusive<EmotionCSSVariant1, EmotionCSSVariant2>;
/**
 * Sometimes user might need to pass multiple "cssProp"s
 *   - to handle such cases, like for @example "cssProp" needs to be an array in App-related components, to not complicate logic in such edge cases, we simply accept an additional cssProp
 */
type EmotionCSS<HasEdgeCase = false> = HasEdgeCase extends true
  ? EmotionCSSVariants
  : { cssProp?: CSSWithTheme };
interface Avatar {
  alt: string
  src: string
}

interface Profile {
  avatar: Avatar
  name: string
  description?: string
}
