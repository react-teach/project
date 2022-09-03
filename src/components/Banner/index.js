import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import Grid from "@mui/material/Grid";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="/images/single-welcome.png" />
      <BannerContent>
        <BannerTitle variant="h2">Çözemediğin soru kalmasın</BannerTitle>
        <BannerDescription variant="subtitle">
          İster LGS’ye ister YKS’ye hazırlan; çözemediğin soruların fotoğrafını
          gönder, Türkiye’nin en iyi üniversitelerinde okuyan öğretmenlerimiz
          senin için çözsün.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
