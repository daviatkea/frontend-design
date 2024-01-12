# **Flow Space-teknikken**

## Formål

At forstå og implementere flow space-teknikken til at håndtere vertikale afstande mellem elementer i et dokument, baseret på en effektiv CSS-teknik beskrevet af Andy Bell på Piccalilli. Denne teknik anvender CSS Custom Properties til at skabe et fleksibelt og vedligeholdelsesvenligt design.

## **Ressourcer**

[My favourite 3 lines of CSS](https://piccalil.li/blog/my-favourite-3-lines-of-css/) af Andy Bell.

## Opgavebeskrivelse

Du skal arbejde med denne branch, som indeholder et HTML-dokument med en blanding af **`h2`**, **`h3`**, og **`p`** tags samt et stylesheet ("style.css").

Din opgave er at anvende flow space-teknikken, så der skabes et behageligt og ensartet vertikalt rum mellem de forskellige elementer. Du skal anvende følgende afstande:

1. Angiv en standard vertikal margin på `.5rlh` mellem alle elementer inde i **`article`**, med mulighed for overskrive denne via en custom property kaldet `--flow-space`.
2. For `h2`, sæt `—flow-space`-værdien til `2rlh`.
3. For `h3`, sæt `—flow-space`-værdien til `1rlh`.
4. For alle elementer, der kommer lige efter **`h3`**, reducér `—flow-space` til `.25rlh`.

Din løsning skal vise en forståelse af flow space-teknikken og korrekt implementere de nødvendige CSS Custom Properties.

## Aflevering

Generer et GitHub Pages-link til din løsning og aflever det på Fronter.
