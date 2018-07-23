// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  dialogflow: {
    //default: 'c4aa4d1e6e14468bbb591adb7ce904bd',
    // defaultAgent: '181ce65294c14b87a8e1082764922c40',
    defaultAgent: 'ab14c24871ab49128d88a2ab600b65c1',
    cSharpAgent: '28cedba236b047fc852a5dce2eacbf1a',
    angularAgent: 'f366a2fd66814aeb8ef0bd2e0b8a5330'
  }
};
