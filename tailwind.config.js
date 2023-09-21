module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Danger": {
          "300": "#A22020",
          "500": "#b31010ff",
          "700": "#E14747"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "TwoUnits": "32px",
        "FourUnits": "64px",
        "Unit": "16px",
        "SixUnits": "96px",
        "FiveUnits": "80px",
        "ThreeUnits": "48px",
        "HalfUnit": "8px",
        "OneAndHalfUnits": "24px"
      },
      "borderRadius": {
        "Radius2": "2px",
        "Radius4": "4px",
        "Round": "50%",
        "Radius8": "8px"
      },
      "scale": {
        "XXLarge": "288px",
        "Small": "48px",
        "MaxWidth": "1400px",
        "Medium": "96px",
        "XLarge": "192px",
        "XSmall": "16px",
        "Large": "144px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}