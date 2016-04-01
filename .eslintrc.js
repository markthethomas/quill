module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
       "comma-dangle": 1,
        "react/no-multi-comp": 0,
        "import/default": 0,
        "import/no-duplicates": 0,
        "import/named": 0,
        "import/namespace": 0,
        "import/no-unresolved": 0,
        "import/no-named-as-default": 2,
        "indent": [2, 2, {"SwitchCase": 1}],
        "no-console": 0,
        "no-alert": 0,
        "id-length": [2, {"min": 3, "max": 25, "exceptions": ["_", "ws", "io", "id", "t", "fs"]}]
    }
};
