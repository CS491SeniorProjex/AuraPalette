import React from "react";
import * as S from "./style";

export const AdjustmentsMenu = ({ setHarmony, setColorBlindness, setMedium, DarkMode, adjustmentsEnabled }) => {

  return (
    <S.MenuContainer style = {adjustmentsEnabled ? {display: "block"} : {display: "none"}} className = {DarkMode}>
      <S.Title className = {DarkMode}>Adjustments</S.Title>
        <div>
            <S.Subtitle className = {DarkMode}>Harmony</S.Subtitle>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="harmony" defaultChecked onChange={() => setHarmony("None")} />
            None
            <S.Checkmark className={`checkmark ${DarkMode}`} />
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="harmony" onChange={() => setHarmony("Analogous")} />
            Analogous
            <S.Checkmark className={`checkmark ${DarkMode}`} />
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="harmony" onChange={() => setHarmony("Monochromatic")} />
            Monochromatic
            <S.Checkmark className={`checkmark ${DarkMode}`} />
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="harmony"  onChange={() => setHarmony("Triads")} />
            Triads
            <S.Checkmark className={`checkmark ${DarkMode}`} />
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="harmony" onChange={() => setHarmony("Complementary")} />
            Complementary
            <S.Checkmark className={`checkmark ${DarkMode}`} />
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="harmony" onChange={() => setHarmony("Split Complementary")} />
            Split Complementary
            <S.Checkmark className={`checkmark ${DarkMode}`} />
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="harmony" onChange={() => setHarmony("Shades")} />
            Shades
            <S.Checkmark className={`checkmark ${DarkMode}`} />
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="harmony" onChange={() => setHarmony("Square")} />
            Square
            <S.Checkmark className={`checkmark ${DarkMode}`} />
            </S.Container>
        </div>

        <div>
            <S.Subtitle className = {DarkMode}>Medium</S.Subtitle>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="medium" defaultChecked onChange={() => setMedium("Default")}></input>
            Default
            <S.Checkmark className={`checkmark ${DarkMode}`}></S.Checkmark>
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="medium" onChange={() => setMedium("Print")}></input>
            Print
            <S.Checkmark className={`checkmark ${DarkMode}`}></S.Checkmark>
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="medium" onChange={() => setMedium("Website")}></input>
            Website
            <S.Checkmark className={`checkmark ${DarkMode}`}></S.Checkmark>
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="medium" onChange={() => setMedium("Video")}></input>
            Video
            <S.Checkmark className={`checkmark ${DarkMode}`}></S.Checkmark>
            </S.Container>
        </div>

        <div>
            <S.Subtitle className = {DarkMode}>Color Blindness</S.Subtitle>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="colorblind" defaultChecked onChange={() => setColorBlindness("None")} />
            None
            <S.Checkmark className={`checkmark ${DarkMode}`} />
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="colorblind" onChange={() => setColorBlindness("Protanopia")}></input>
            Protanopia
            <S.Checkmark className={`checkmark ${DarkMode}`}></S.Checkmark>
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="colorblind" onChange={() => setColorBlindness("Protanomaly")}></input>
            Protanomaly
            <S.Checkmark className={`checkmark ${DarkMode}`}></S.Checkmark>
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="colorblind" onChange={() => setColorBlindness("Deuteranopia")}></input>
            Deuteranopia
            <S.Checkmark className={`checkmark ${DarkMode}`}></S.Checkmark>
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="colorblind" onChange={() => setColorBlindness("Deuteranomaly")}></input>
            Deuteranomaly
            <S.Checkmark className={`checkmark ${DarkMode}`}></S.Checkmark>
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="colorblind" onChange={() => setColorBlindness("Tritanopia")}></input>
            Tritanopia
            <S.Checkmark className={`checkmark ${DarkMode}`}></S.Checkmark>
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="colorblind" onChange={() => setColorBlindness("Tritanomaly")}></input>
            Tritanomaly
            <S.Checkmark className={`checkmark ${DarkMode}`}></S.Checkmark>
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="colorblind" onChange={() => setColorBlindness("Achromatopsia")}></input>
            Achromatopsia
            <S.Checkmark className={`checkmark ${DarkMode}`}></S.Checkmark>
            </S.Container>

            <S.Container className = {DarkMode}>
            <input className = {DarkMode} type="radio" name="colorblind" onChange={() => setColorBlindness("Achromatomaly")}></input>
            Achromatomaly
            <S.Checkmark className={`checkmark ${DarkMode}`}></S.Checkmark>
            </S.Container>
        </div>
    </S.MenuContainer>
  );
};
