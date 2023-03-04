window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">
  // Custom plugin to hide the API definition URL
  const HideInfoUrlPartsPlugin = () => {
    return {
      wrapComponents: {
        InfoUrl: () => () => null
      }
    }
  }
  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {
        url: "./custom/DQV_Api.yaml",
        name: "Data Query & Validation APIs"
      },
      {
        url: "./custom/getMapApi.yaml",
        name: "Map Visualization APIs"
      },
      {
        url: "./custom/SAT_API.yaml",
        name: "SAT (Save/Append/Truncate) APIs"
      },
      {
        url: "./custom/styleAPI.yaml",
        name: "Styling APIs"
      }
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    defaultModelsExpandDepth: -1,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      HideInfoUrlPartsPlugin
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
