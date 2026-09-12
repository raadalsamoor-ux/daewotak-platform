
node_modules/
build/
dist/
coverage/
.DS_Store
*.log
.env*
!.env.example

{
  "lockfileVersion": 2,
  "configVersion": 1,
  "workspaces": {
    "": {
      "name": "react-example",
      "dependencies": {
        "@google/genai": "^2.4.0",
        "@tailwindcss/vite": "^4.1.14",
        "@types/canvas-confetti": "^1.9.0",
        "@types/qrcode": "^1.5.6",
        "@vitejs/plugin-react": "^5.0.4",
        "canvas-confetti": "^1.9.4",
        "dotenv": "^17.2.3",
        "express": "^4.21.2",
        "lucide-react": "^0.546.0",
        "motion": "^12.23.24",
        "qrcode": "^1.5.4",
        "react": "^19.0.1",
        "react-dom": "^19.0.1",
        "vite": "^6.2.3",
      },
      "devDependencies": {
        "@types/express": "^4.17.21",
        "@types/node": "^22.14.0",
        "autoprefixer": "^10.4.21",
        "esbuild": "^0.25.0",
        "tailwindcss": "^4.1.14",
        "tsx": "^4.21.0",
        "typescript": "~5.8.2",
        "vite": "^6.2.3",
      },
    },
  },
  "packages": {
    "@babel/code-frame": ["@babel/code-frame@7.29.7", "", { "dependencies": { "@babel/helper-validator-identifier": "^7.29.7", "js-tokens": "^4.0.0", "picocolors": "^1.1.1" } }, "sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw=="],

    "@babel/compat-data": ["@babel/compat-data@7.29.7", "", {}, "sha512-locTkQyKvwIEgBzVrn8693ebc97F2U8ZHjbXwDXJ5Fn2TCpNwTlKcaKLkdHop5c/icOFE7qt7Q9JC5hnKNa6Gg=="],

    "@babel/core": ["@babel/core@7.29.7", "", { "dependencies": { "@babel/code-frame": "^7.29.7", "@babel/generator": "^7.29.7", "@babel/helper-compilation-targets": "^7.29.7", "@babel/helper-module-transforms": "^7.29.7", "@babel/helpers": "^7.29.7", "@babel/parser": "^7.29.7", "@babel/template": "^7.29.7", "@babel/traverse": "^7.29.7", "@babel/types": "^7.29.7", "@jridgewell/remapping": "^2.3.5", "convert-source-map": "^2.0.0", "debug": "^4.1.0", "gensync": "^1.0.0-beta.2", "json5": "^2.2.3", "semver": "^6.3.1" } }, "sha512-RgHBCvtjbOK2gXSNBNIkNoEc9qoVEtau3hj8gEqKQuL3HZAibKarWFEI3Lfm6EYKkLalOh8eSrj9b+ch9H/VBA=="],

    "@babel/generator": ["@babel/generator@7.29.8", "", { "dependencies": { "@babel/parser": "^7.29.8", "@babel/types": "^7.29.8", "@jridgewell/gen-mapping": "^0.3.12", "@jridgewell/trace-mapping": "^0.3.28", "jsesc": "^3.0.2" } }, "sha512-gZbepsdh3WDtgZKWL+vTPh71LSBrm/Y4/QDZBVCcYfmeTEEuoOYwlSy+G1StfJg+/Zy550u/3TATbm7qDbbMtg=="],

    "@babel/helper-compilation-targets": ["@babel/helper-compilation-targets@7.29.7", "", { "dependencies": { "@babel/compat-data": "^7.29.7", "@babel/helper-validator-option": "^7.29.7", "browserslist": "^4.24.0", "lru-cache": "^5.1.1", "semver": "^6.3.1" } }, "sha512-wem6WaBj4NaVYVdNhLPPVacES6ZJ+KBBfSkTMD3YZxbP3rm3Di85tJU5ljaUNhaOynt+Aj0xruhYuzQBt8n71g=="],

    "@babel/helper-globals": ["@babel/helper-globals@7.29.7", "", {}, "sha512-3nQVUAtvkKH9zahfWgw96Jc/uFOmjACE1kQz82E2lqWmHBgjzbNlsC22nuQTfahmWeQtTq5nQ/4Nnd2A1wj4zA=="],

    "@babel/helper-module-imports": ["@babel/helper-module-imports@7.29.7", "", { "dependencies": { "@babel/traverse": "^7.29.7", "@babel/types": "^7.29.7" } }, "sha512-ejHwrQQYcm9xnTivShn2IDOlIzInN34AXskvq9QicvCtEzq1Vzclu/tKF8Jq1Cg8JG2GL6/EmjgsCT7lXepE3g=="],

    "@babel/helper-module-transforms": ["@babel/helper-module-transforms@7.29.7", "", { "dependencies": { "@babel/helper-module-imports": "^7.29.7", "@babel/helper-validator-identifier": "^7.29.7", "@babel/traverse": "^7.29.7" }, "peerDependencies": { "@babel/core": "^7.0.0" } }, "sha512-UPUVSyXbOh627KiCIGQSgwWzGeBKLkaJ9PJEdrngIwMSzxLR4jS4+f1f1jb7VzBbg8nFLaYotvVPFCTqdrmTAg=="],

    "@babel/helper-plugin-utils": ["@babel/helper-plugin-utils@7.29.7", "", {}, "sha512-G7sHYigPY17oO5SYWnfD/0MTBwVR781S/JI643e/JhUYgVgWE/61SoW3NH9KWUKyKq5LVh3npif99Wkt6j86Jw=="],

    "@babel/helper-string-parser": ["@babel/helper-string-parser@7.29.7", "", {}, "sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw=="],

    "@babel/helper-validator-identifier": ["@babel/helper-validator-identifier@7.29.7", "", {}, "sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg=="],

    "@babel/helper-validator-option": ["@babel/helper-validator-option@7.29.7", "", {}, "sha512-N9ZErrD+yW5geCDtBqnOoxmR8+tNKiGuxKlDpuJxfsqpa2dFcexaziGAE/qoHLiDDreVNMupxGmSoNlyvsA3gw=="],

    "@babel/helpers": ["@babel/helpers@7.29.7", "", { "dependencies": { "@babel/template": "^7.29.7", "@babel/types": "^7.29.7" } }, "sha512-1k2lAGRMfHTcwuNYcCNUmaUffmQv8KWMfh2iJUUeRlwlwH4FdNG7mfPI10NPfLHJFThE4Tyr4mv7kTNZOiPuBg=="],

    "@babel/parser": ["@babel/parser@7.29.8", "", { "dependencies": { "@babel/types": "^7.29.8" }, "bin": "./bin/babel-parser.js" }, "sha512-E8lTAYNB1KW+FH+VGJuZM1ioAx2E6oVlvQFRrf5P8ZZmsiJXYAD9vTFV7yyEURNzgh1dFqMZuO6tUwcARbqFCA=="],

    "@babel/plugin-transform-react-jsx-self": ["@babel/plugin-transform-react-jsx-self@7.29.7", "", { "dependencies": { "@babel/helper-plugin-utils": "^7.29.7" }, "peerDependencies": { "@babel/core": "^7.0.0-0" } }, "sha512-TL0hMc9xzy86VD31nUiwzd5otRAcyEPcsegCxolO0PvcXuH1v0kECe/UIznYFihpkvU5wg/jk4v0TTEFfm53fw=="],

    "@babel/plugin-transform-react-jsx-source": ["@babel/plugin-transform-react-jsx-source@7.29.7", "", { "dependencies": { "@babel/helper-plugin-utils": "^7.29.7" }, "peerDependencies": { "@babel/core": "^7.0.0-0" } }, "sha512-06IyK09H3wi4cGbhDBwp5gUGo0IKtnYa8tyTiephirPCK6fbobVGiXMMI5zLQ4aKEYP3wZ3ArU44o+8KMrSG/Q=="],

    "@babel/template": ["@babel/template@7.29.7", "", { "dependencies": { "@babel/code-frame": "^7.29.7", "@babel/parser": "^7.29.7", "@babel/types": "^7.29.7" } }, "sha512-puq+Gf35oI24FeN11LkoUQFqv9uwNeWpxXZi/Ji3rRIoKAzKnxRaZ+Gkj0vKS9ZCiTESfng1N9LyOyXvo+m+Gg=="],

    "@babel/traverse": ["@babel/traverse@7.29.8", "", { "dependencies": { "@babel/code-frame": "^7.29.7", "@babel/generator": "^7.29.8", "@babel/helper-globals": "^7.29.7", "@babel/parser": "^7.29.8", "@babel/template": "^7.29.7", "@babel/types": "^7.29.8", "debug": "^4.3.1" } }, "sha512-I5z7H3bf/41ktsNVLtpN0wAa336HkqIHQ5BuPLEhTkt1jVSyZpeNKIzTgEWmlxjdg81R0IgUCcaE+Ok3NvrfZg=="],

    "@babel/types": ["@babel/types@7.29.8", "", { "dependencies": { "@babel/helper-string-parser": "^7.29.7", "@babel/helper-validator-identifier": "^7.29.7" } }, "sha512-Vj1jF3cPfxg7OAfoI7QnVKLoILlm2JF9pnVHrX8qx7AHMiYWT+NDAA7jChlNgRS4WTLc/fD1lXLmPixluj+3Gg=="],

    "@esbuild/aix-ppc64": ["@esbuild/aix-ppc64@0.25.12", "", { "os": "aix", "cpu": "ppc64" }, "sha512-Hhmwd6CInZ3dwpuGTF8fJG6yoWmsToE+vYgD4nytZVxcu1ulHpUQRAB1UJ8+N1Am3Mz4+xOByoQoSZf4D+CpkA=="],

    "@esbuild/android-arm": ["@esbuild/android-arm@0.25.12", "", { "os": "android", "cpu": "arm" }, "sha512-VJ+sKvNA/GE7Ccacc9Cha7bpS8nyzVv0jdVgwNDaR4gDMC/2TTRc33Ip8qrNYUcpkOHUT5OZ0bUcNNVZQ9RLlg=="],

    "@esbuild/android-arm64": ["@esbuild/android-arm64@0.25.12", "", { "os": "android", "cpu": "arm64" }, "sha512-6AAmLG7zwD1Z159jCKPvAxZd4y/VTO0VkprYy+3N2FtJ8+BQWFXU+OxARIwA46c5tdD9SsKGZ/1ocqBS/gAKHg=="],

    "@esbuild/android-x64": ["@esbuild/android-x64@0.25.12", "", { "os": "android", "cpu": "x64" }, "sha512-5jbb+2hhDHx5phYR2By8GTWEzn6I9UqR11Kwf22iKbNpYrsmRB18aX/9ivc5cabcUiAT/wM+YIZ6SG9QO6a8kg=="],

    "@esbuild/darwin-arm64": ["@esbuild/darwin-arm64@0.25.12", "", { "os": "darwin", "cpu": "arm64" }, "sha512-N3zl+lxHCifgIlcMUP5016ESkeQjLj/959RxxNYIthIg+CQHInujFuXeWbWMgnTo4cp5XVHqFPmpyu9J65C1Yg=="],

    "@esbuild/darwin-x64": ["@esbuild/darwin-x64@0.25.12", "", { "os": "darwin", "cpu": "x64" }, "sha512-HQ9ka4Kx21qHXwtlTUVbKJOAnmG1ipXhdWTmNXiPzPfWKpXqASVcWdnf2bnL73wgjNrFXAa3yYvBSd9pzfEIpA=="],

    "@esbuild/freebsd-arm64": ["@esbuild/freebsd-arm64@0.25.12", "", { "os": "freebsd", "cpu": "arm64" }, "sha512-gA0Bx759+7Jve03K1S0vkOu5Lg/85dou3EseOGUes8flVOGxbhDDh/iZaoek11Y8mtyKPGF3vP8XhnkDEAmzeg=="],

    "@esbuild/freebsd-x64": ["@esbuild/freebsd-x64@0.25.12", "", { "os": "freebsd", "cpu": "x64" }, "sha512-TGbO26Yw2xsHzxtbVFGEXBFH0FRAP7gtcPE7P5yP7wGy7cXK2oO7RyOhL5NLiqTlBh47XhmIUXuGciXEqYFfBQ=="],

    "@esbuild/linux-arm": ["@esbuild/linux-arm@0.25.12", "", { "os": "linux", "cpu": "arm" }, "sha512-lPDGyC1JPDou8kGcywY0YILzWlhhnRjdof3UlcoqYmS9El818LLfJJc3PXXgZHrHCAKs/Z2SeZtDJr5MrkxtOw=="],

    "@esbuild/linux-arm64": ["@esbuild/linux-arm64@0.25.12", "", { "os": "linux", "cpu": "arm64" }, "sha512-8bwX7a8FghIgrupcxb4aUmYDLp8pX06rGh5HqDT7bB+8Rdells6mHvrFHHW2JAOPZUbnjUpKTLg6ECyzvas2AQ=="],

    "@esbuild/linux-ia32": ["@esbuild/linux-ia32@0.25.12", "", { "os": "linux", "cpu": "ia32" }, "sha512-0y9KrdVnbMM2/vG8KfU0byhUN+EFCny9+8g202gYqSSVMonbsCfLjUO+rCci7pM0WBEtz+oK/PIwHkzxkyharA=="],

    "@esbuild/linux-loong64": ["@esbuild/linux-loong64@0.25.12", "", { "os": "linux", "cpu": "none" }, "sha512-h///Lr5a9rib/v1GGqXVGzjL4TMvVTv+s1DPoxQdz7l/AYv6LDSxdIwzxkrPW438oUXiDtwM10o9PmwS/6Z0Ng=="],

    "@esbuild/linux-mips64el": ["@esbuild/linux-mips64el@0.25.12", "", { "os": "linux", "cpu": "none" }, "sha512-iyRrM1Pzy9GFMDLsXn1iHUm18nhKnNMWscjmp4+hpafcZjrr2WbT//d20xaGljXDBYHqRcl8HnxbX6uaA/eGVw=="],

    "@esbuild/linux-ppc64": ["@esbuild/linux-ppc64@0.25.12", "", { "os": "linux", "cpu": "ppc64" }, "sha512-9meM/lRXxMi5PSUqEXRCtVjEZBGwB7P/D4yT8UG/mwIdze2aV4Vo6U5gD3+RsoHXKkHCfSxZKzmDssVlRj1QQA=="],

    "@esbuild/linux-riscv64": ["@esbuild/linux-riscv64@0.25.12", "", { "os": "linux", "cpu": "none" }, "sha512-Zr7KR4hgKUpWAwb1f3o5ygT04MzqVrGEGXGLnj15YQDJErYu/BGg+wmFlIDOdJp0PmB0lLvxFIOXZgFRrdjR0w=="],

    "@esbuild/linux-s390x": ["@esbuild/linux-s390x@0.25.12", "", { "os": "linux", "cpu": "s390x" }, "sha512-MsKncOcgTNvdtiISc/jZs/Zf8d0cl/t3gYWX8J9ubBnVOwlk65UIEEvgBORTiljloIWnBzLs4qhzPkJcitIzIg=="],

    "@esbuild/linux-x64": ["@esbuild/linux-x64@0.25.12", "", { "os": "linux", "cpu": "x64" }, "sha512-uqZMTLr/zR/ed4jIGnwSLkaHmPjOjJvnm6TVVitAa08SLS9Z0VM8wIRx7gWbJB5/J54YuIMInDquWyYvQLZkgw=="],

    "@esbuild/netbsd-arm64": ["@esbuild/netbsd-arm64@0.25.12", "", { "os": "none", "cpu": "arm64" }, "sha512-xXwcTq4GhRM7J9A8Gv5boanHhRa/Q9KLVmcyXHCTaM4wKfIpWkdXiMog/KsnxzJ0A1+nD+zoecuzqPmCRyBGjg=="],

    "@esbuild/netbsd-x64": ["@esbuild/netbsd-x64@0.25.12", "", { "os": "none", "cpu": "x64" }, "sha512-Ld5pTlzPy3YwGec4OuHh1aCVCRvOXdH8DgRjfDy/oumVovmuSzWfnSJg+VtakB9Cm0gxNO9BzWkj6mtO1FMXkQ=="],

    "@esbuild/openbsd-arm64": ["@esbuild/openbsd-arm64@0.25.12", "", { "os": "openbsd", "cpu": "arm64" }, "sha512-fF96T6KsBo/pkQI950FARU9apGNTSlZGsv1jZBAlcLL1MLjLNIWPBkj5NlSz8aAzYKg+eNqknrUJ24QBybeR5A=="],

    "@esbuild/openbsd-x64": ["@esbuild/openbsd-x64@0.25.12", "", { "os": "openbsd", "cpu": "x64" }, "sha512-MZyXUkZHjQxUvzK7rN8DJ3SRmrVrke8ZyRusHlP+kuwqTcfWLyqMOE3sScPPyeIXN/mDJIfGXvcMqCgYKekoQw=="],

    "@esbuild/openharmony-arm64": ["@esbuild/openharmony-arm64@0.25.12", "", { "os": "none", "cpu": "arm64" }, "sha512-rm0YWsqUSRrjncSXGA7Zv78Nbnw4XL6/dzr20cyrQf7ZmRcsovpcRBdhD43Nuk3y7XIoW2OxMVvwuRvk9XdASg=="],

    "@esbuild/sunos-x64": ["@esbuild/sunos-x64@0.25.12", "", { "os": "sunos", "cpu": "x64" }, "sha512-3wGSCDyuTHQUzt0nV7bocDy72r2lI33QL3gkDNGkod22EsYl04sMf0qLb8luNKTOmgF/eDEDP5BFNwoBKH441w=="],

    "@esbuild/win32-arm64": ["@esbuild/win32-arm64@0.25.12", "", { "os": "win32", "cpu": "arm64" }, "sha512-rMmLrur64A7+DKlnSuwqUdRKyd3UE7oPJZmnljqEptesKM8wx9J8gx5u0+9Pq0fQQW8vqeKebwNXdfOyP+8Bsg=="],

    "@esbuild/win32-ia32": ["@esbuild/win32-ia32@0.25.12", "", { "os": "win32", "cpu": "ia32" }, "sha512-HkqnmmBoCbCwxUKKNPBixiWDGCpQGVsrQfJoVGYLPT41XWF8lHuE5N6WhVia2n4o5QK5M4tYr21827fNhi4byQ=="],

    "@esbuild/win32-x64": ["@esbuild/win32-x64@0.25.12", "", { "os": "win32", "cpu": "x64" }, "sha512-alJC0uCZpTFrSL0CCDjcgleBXPnCrEAhTBILpeAp7M/OFgoqtAetfBzX0xM00MUsVVPpVjlPuMbREqnZCXaTnA=="],

    "@google/genai": ["@google/genai@2.22.0", "", { "dependencies": { "google-auth-library": "^10.3.0", "p-retry": "^4.6.2", "protobufjs": "^7.5.4", "ws": "^8.18.0" }, "peerDependencies": { "@modelcontextprotocol/sdk": "^1.25.2" }, "optionalPeers": ["@modelcontextprotocol/sdk"] }, "sha512-NE90Nl0AP75YZ2tGxXjQQs6Gkunma7a1JmPCx5g5CxvjHXshmuI2aNoPJ1xLrRixjkNxog898oylM+MyNudUQw=="],

    "@jridgewell/gen-mapping": ["@jridgewell/gen-mapping@0.3.13", "", { "dependencies": { "@jridgewell/sourcemap-codec": "^1.5.0", "@jridgewell/trace-mapping": "^0.3.24" } }, "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA=="],

    "@jridgewell/remapping": ["@jridgewell/remapping@2.3.5", "", { "dependencies": { "@jridgewell/gen-mapping": "^0.3.5", "@jridgewell/trace-mapping": "^0.3.24" } }, "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ=="],

    "@jridgewell/resolve-uri": ["@jridgewell/resolve-uri@3.1.2", "", {}, "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw=="],

    "@jridgewell/sourcemap-codec": ["@jridgewell/sourcemap-codec@1.6.0", "", {}, "sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw=="],

    "@jridgewell/trace-mapping": ["@jridgewell/trace-mapping@0.3.31", "", { "dependencies": { "@jridgewell/resolve-uri": "^3.1.0", "@jridgewell/sourcemap-codec": "^1.4.14" } }, "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw=="],

    "@napi-rs/lzma-linux-x64-gnu": ["@napi-rs/lzma-linux-x64-gnu@1.5.1", "", { "os": "linux", "cpu": "x64" }, "sha512-oTXEIha4SsuXdTA4Iyskj0kpdx2yVXdhd75c2v3xGrHFfVMsbhTPZU/nMPL4sWKo4pBHm3aucLaqGlF696dTyQ=="],

    "@protobufjs/aspromise": ["@protobufjs/aspromise@1.1.2", "", {}, "sha512-j+gKExEuLmKwvz3OgROXtrJ2UG2x8Ch2YZUxahh+s1F2HZ+wAceUNLkvy6zKCPVRkU++ZWQrdxsUeQXmcg4uoQ=="],

    "@protobufjs/base64": ["@protobufjs/base64@1.1.2", "", {}, "sha512-AZkcAA5vnN/v4PDqKyMR5lx7hZttPDgClv83E//FMNhR2TMcLUhfRUBHCmSl0oi9zMgDDqRUJkSxO3wm85+XLg=="],

    "@protobufjs/codegen": ["@protobufjs/codegen@2.0.5", "", {}, "sha512-zgXFLzW3Ap33e6d0Wlj4MGIm6Ce8O89n/apUaGNB/jx+hw+ruWEp7EwGUshdLKVRCxZW12fp9r40E1mQrf/34g=="],

    "@protobufjs/eventemitter": ["@protobufjs/eventemitter@1.1.1", "", {}, "sha512-vW1GmwMZNnL+gMRaovlh9yZX74kc+TTU3FObkkurpMaRtBfLP3ldjS9KQWlwZgraRE0+dheEEoAxdzcJQ8eXZg=="],

    "@protobufjs/fetch": ["@protobufjs/fetch@1.1.1", "", { "dependencies": { "@protobufjs/aspromise": "^1.1.1" } }, "sha512-GpptLrs57adMSuHi3VNj0mAF8dwh36LMaYF6XyJ6JMWlVsc+t42tm1HSEDmOs3A8fC9yyeisgLhsTVQokOZ0zw=="],

    "@protobufjs/float": ["@protobufjs/float@1.0.2", "", {}, "sha512-Ddb+kVXlXst9d+R9PfTIxh1EdNkgoRe5tOX6t01f1lYWOvJnSPDBlG241QLzcyPdoNTsblLUdujGSE4RzrTZGQ=="],

    "@protobufjs/path": ["@protobufjs/path@1.1.2", "", {}, "sha512-6JOcJ5Tm08dOHAbdR3GrvP+yUUfkjG5ePsHYczMFLq3ZmMkAD98cDgcT2iA1lJ9NVwFd4tH/iSSoe44YWkltEA=="],

    "@protobufjs/pool": ["@protobufjs/pool@1.1.0", "", {}, "sha512-0kELaGSIDBKvcgS4zkjz1PeddatrjYcmMWOlAuAPwAeccUrPHdUqo/J6LiymHHEiJT5NrF1UVwxY14f+fy4WQw=="],

    "@protobufjs/utf8": ["@protobufjs/utf8@1.1.2", "", {}, "sha512-b1UQwcEZ4yCnMCD8DAL1VlbvBJE9/IX4FTIp7BG1xYpf29SLazLSrqUkj4w7Y5y7cCVP6E5tcqqcI0xemPkHug=="],

    "@rolldown/pluginutils": ["@rolldown/pluginutils@1.0.0-rc.3", "", {}, "sha512-eybk3TjzzzV97Dlj5c+XrBFW57eTNhzod66y9HrBlzJ6NsCrWCp/2kaPS3K9wJmurBC0Tdw4yPjXKZqlznim3Q=="],

    "@rollup/rollup-android-arm-eabi": ["@rollup/rollup-android-arm-eabi@4.63.1", "", { "os": "android", "cpu": "arm" }, "sha512-UZ8sUxPTiHWYX9QNdJedb1kDZSpS1t/VPWBWGSgqHNi9w3Cu6IXvu2mzbhiTiPvtrqgTQJ+zqiAq2iPIPilpaQ=="],

    "@rollup/rollup-android-arm64": ["@rollup/rollup-android-arm64@4.63.1", "", { "os": "android", "cpu": "arm64" }, "sha512-cQ4nFQABN5cDvDpbvJ7bMStCpnaVxynZrRMfUJYgxcIk9Sh54FIO1vtfkg0B69REjER77ioZ/ov+eAApx/KmLQ=="],

    "@rollup/rollup-darwin-arm64": ["@rollup/rollup-darwin-arm64@4.63.1", "", { "os": "darwin", "cpu": "arm64" }, "sha512-FQNqd1lRy/0QhDk3xeRIkSBiCpXCiDnZO3YLVdcDKN1UBiKToNftCzcXYNLshmPDUMlu2TdeS8tGcsU6f3YF1Q=="],

    "@rollup/rollup-darwin-x64": ["@rollup/rollup-darwin-x64@4.63.1", "", { "os": "darwin", "cpu": "x64" }, "sha512-pvD16V939D3CloK0+qikpGaxiPrDUXTe7Y5cWOMkMSy7m1cawa8EGy/kXYi/G/cKAC4HDAbSnzCIk1WmsoOKXg=="],

    "@rollup/rollup-freebsd-arm64": ["@rollup/rollup-freebsd-arm64@4.63.1", "", { "os": "freebsd", "cpu": "arm64" }, "sha512-pcFGeL2345VwdTnJhA6zLbew+YgWB0qBG2+dMtXjCicf6+rm6kO6cOoh5VnTe0ZMrMRgRyuHmCJxZWrIdzYuOw=="],

    "@rollup/rollup-freebsd-x64": ["@rollup/rollup-freebsd-x64@4.63.1", "", { "os": "freebsd", "cpu": "x64" }, "sha512-mRJlqSRulVzcKq/LKA6ICSIc3K/l4fzlVn/gePn2nXIHy8seRi5z/eeRE0d/XMBxcMldiXtQTSpRj0tkkC3g8Q=="],

    "@rollup/rollup-linux-arm-gnueabihf": ["@rollup/rollup-linux-arm-gnueabihf@4.63.1", "", { "os": "linux", "cpu": "arm" }, "sha512-YDUNvVM85TI3g/1OpnqKP1h4NeW/j64DfWMf+G3M809xNk1bJSnpFp4sh83NpmVE5DXnkh8ULor4LTVZKoYLHw=="],

    "@rollup/rollup-linux-arm-musleabihf": ["@rollup/rollup-linux-arm-musleabihf@4.63.1", "", { "os": "linux", "cpu": "arm" }, "sha512-7Mcn71p9ZuQFAj+h+dhQXy/yeLePRS2yKRnmW1DijA9thKO5qap0GNOIQK4yQ6iP3SU0Mrb/yWo8h8vgRba8lw=="],

    "@rollup/rollup-linux-arm64-gnu": ["@rollup/rollup-linux-arm64-gnu@4.63.1", "", { "os": "linux", "cpu": "arm64" }, "sha512-4YiLQTX6U4CSl0L9cluep9A9W6UmTfqBDc2/CH6wlu54pl4E7Jn3cOD8oxzvBDEGk/JMKgJ47C8g+radF7mwvg=="],

    "@rollup/rollup-linux-arm64-musl": ["@rollup/rollup-linux-arm64-musl@4.63.1", "", { "os": "linux", "cpu": "arm64" }, "sha512-2ra8F7w8OquwZN9z2/fKFnli69wa8PLwaVzRMIPGb13ByMJwC28Fbp8YcVGoUhlYMTt7j5j9bNgpysrN2UM+vw=="],

    "@rollup/rollup-linux-loong64-gnu": ["@rollup/rollup-linux-loong64-gnu@4.63.1", "", { "os": "linux", "cpu": "none" }, "sha512-Sy20ncyhjmBP0Ml+UvQbimjlk6VFgjW5uNP+qqwHB00mTE8Bl2C1TuHTlRwK2YoXeZbee5lP2XevBWVkAQAtSQ=="],

    "@rollup/rollup-linux-loong64-musl": ["@rollup/rollup-linux-loong64-musl@4.63.1", "", { "os": "linux", "cpu": "none" }, "sha512-noITLp8oNjYliPnGWmLyelIHwULGqbHloQHGw1rtxbWhTuWooRpnZarZQJ1y9EUC4szuCusCc+HEpUtxpIwYvA=="],

    "@rollup/rollup-linux-ppc64-gnu": ["@rollup/rollup-linux-ppc64-gnu@4.63.1", "", { "os": "linux", "cpu": "ppc64" }, "sha512-hlxxXd+F1mWiAcaFR7Sv9ZQT6m6UfI8+Vy/kFJzztq2pDMU/0wZ9sish0iszNZvsQDo8Gc0i5yuFEOz5dDf6fA=="],

    "@rollup/rollup-linux-ppc64-musl": ["@rollup/rollup-linux-ppc64-musl@4.63.1", "", { "os": "linux", "cpu": "ppc64" }, "sha512-EF7OpqQTQ/BvGqLzUi4rEHuagCV9MugAUXSHemwPW5vxZ75RR+jxO/2j95Ph2dalMpFHSVECjRoioHZgA9zOYA=="],

    "@rollup/rollup-linux-riscv64-gnu": ["@rollup/rollup-linux-riscv64-gnu@4.63.1", "", { "os": "linux", "cpu": "none" }, "sha512-wQO3JesW9PRkwlabQ27y7sPfVOOTLRG73I4F2UYHG5PXun3J9U3y+b7ezVKSYbsvSKGQ1k1cq8Qlun4C9kLt3w=="],

    "@rollup/rollup-linux-riscv64-musl": ["@rollup/rollup-linux-riscv64-musl@4.63.1", "", { "os": "linux", "cpu": "none" }, "sha512-ouAGwhO6wHRXdnOVCOsB0tRFkA7nhNB2Nwax6oECXN0YiN8EYUTBAOudADOB1PI+yDL61TeNx/u7MVCzksNbkQ=="],

    "@rollup/rollup-linux-s390x-gnu": ["@rollup/rollup-linux-s390x-gnu@4.63.1", "", { "os": "linux", "cpu": "s390x" }, "sha512-q2R38Sn+1J8RxhfJ+T54wSWmyKXWec+9jgDfqO2AtArEqHO5R2aeayp5H5OYLr5UYDVGsVaZPEFUooMhYCdz5A=="],

    "@rollup/rollup-linux-x64-gnu": ["@rollup/rollup-linux-x64-gnu@4.63.1", "", { "os": "linux", "cpu": "x64" }, "sha512-gfI5T24WLLuFfSKw7Go/zDXjAAV0fny0swTaDv+WjK7vqcw4cRhFfdsyKL1n+ukI+ooBxn3bVQnyrn06WpI50w=="],

    "@rollup/rollup-linux-x64-musl": ["@rollup/rollup-linux-x64-musl@4.63.1", "", { "os": "linux", "cpu": "x64" }, "sha512-4h6XqthmB4Hspji84wvgk+ElodTsGj+dbZqHJHHtKxj4mYq0ANSEEPX9ys3moJueqsRjwpaJYH7874Itwnj2ow=="],

    "@rollup/rollup-openbsd-x64": ["@rollup/rollup-openbsd-x64@4.63.1", "", { "os": "openbsd", "cpu": "x64" }, "sha512-dlfCOa87o1VAYegLQ9EKilx2JCeRofiyPGhTCmqnuXZ6bMPiycO1rq1+sKoulAp7pGLIsTIw+1x5R+zgh5LhhA=="],

    "@rollup/rollup-openharmony-arm64": ["@rollup/rollup-openharmony-arm64@4.63.1", "", { "os": "none", "cpu": "arm64" }, "sha512-cjkLbOlfcm3QGhMM1J5zaZjsw1GggbN6rw9UTSSRrPrR1KkcXnN7Uq9rPw34xImQ9VOY9GN+6u2Zj80B9ptkcw=="],

    "@rollup/rollup-win32-arm64-msvc": ["@rollup/rollup-win32-arm64-msvc@4.63.1", "", { "os": "win32", "cpu": "arm64" }, "sha512-Li1KdUnWGE4N3e1F/B4RTB1ms+nG4WBgjByO46pkeBVX/2UBsY53xf5vK9WygVmnH3RwncIST7lkSdLSY6P9lg=="],

    "@rollup/rollup-win32-ia32-msvc": ["@rollup/rollup-win32-ia32-msvc@4.63.1", "", { "os": "win32", "cpu": "ia32" }, "sha512-t4ZYOSoLTgwhuFMrmTMLx/+i1DQVK7HYqMc6kY46EApwi8X0nIVphzdNoThU3xt6n+N5urG1/gxBdCaKDLavfg=="],

    "@rollup/rollup-win32-x64-gnu": ["@rollup/rollup-win32-x64-gnu@4.63.1", "", { "os": "win32", "cpu": "x64" }, "sha512-RgroPfMmKlD1RzSDxvwgcPiy2HNQKoYV7OmwIXDsk73uKW5t6B/V8KIy27SMv/FNXFo/oSBtWc9J0X7t91ezZg=="],

    "@rollup/rollup-win32-x64-msvc": ["@rollup/rollup-win32-x64-msvc@4.63.1", "", { "os": "win32", "cpu": "x64" }, "sha512-at8QVep6S3h5Y6gSbdGU06bRY5WJkf6WUduM9YtvYMbYhB1MOFfUgc6kehitQXzOtMSaT70q7f9ydPhpqu821w=="],

    "@tailwindcss/node": ["@tailwindcss/node@4.3.3", "", { "dependencies": { "@jridgewell/remapping": "^2.3.5", "enhanced-resolve": "^5.24.1", "jiti": "^2.7.0", "lightningcss": "1.32.0", "magic-string": "^0.30.21", "source-map-js": "^1.2.1", "tailwindcss": "4.3.3" } }, "sha512-/T8IKEsf9VTU6tLjgC7+sv2mOPtQxzE2jMw7u4Tt40Tx+QSZxpzh95/H6cMKoja9XuW7iMdLJYBB0o9G1CaAgg=="],

    "@tailwindcss/oxide": ["@tailwindcss/oxide@4.3.3", "", { "optionalDependencies": { "@tailwindcss/oxide-android-arm64": "4.3.3", "@tailwindcss/oxide-darwin-arm64": "4.3.3", "@tailwindcss/oxide-darwin-x64": "4.3.3", "@tailwindcss/oxide-freebsd-x64": "4.3.3", "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.3", "@tailwindcss/oxide-linux-arm64-gnu": "4.3.3", "@tailwindcss/oxide-linux-arm64-musl": "4.3.3", "@tailwindcss/oxide-linux-x64-gnu": "4.3.3", "@tailwindcss/oxide-linux-x64-musl": "4.3.3", "@tailwindcss/oxide-wasm32-wasi": "4.3.3", "@tailwindcss/oxide-win32-arm64-msvc": "4.3.3", "@tailwindcss/oxide-win32-x64-msvc": "4.3.3" } }, "sha512-krXjAikiaFSPaK/FkAQT5UTx3VormQaiZ5hBFlJZ9UFQGB/rwg1MZIhHAG9smMQRTdyJxP6Qt5MwMtdyU5FWrA=="],

    "@tailwindcss/oxide-android-arm64": ["@tailwindcss/oxide-android-arm64@4.3.3", "", { "os": "android", "cpu": "arm64" }, "sha512-Y85A2gmPSkl5Ve5qR86GL4HT509cFqQh1aes9p3sSkyTPwt0Pppf3GkwGe4JPACcRYjgJIEhQgM6dBClnr0NYw=="],

    "@tailwindcss/oxide-darwin-arm64": ["@tailwindcss/oxide-darwin-arm64@4.3.3", "", { "os": "darwin", "cpu": "arm64" }, "sha512-BiaWatpBcERQFDlOjRDpIVXuFK5PJez5SA4JMg6VYZdBYU+qKfV/vqjcIs+IYmtitf1xYQZTwXvU/8y4lfZUGw=="],

    "@tailwindcss/oxide-darwin-x64": ["@tailwindcss/oxide-darwin-x64@4.3.3", "", { "os": "darwin", "cpu": "x64" }, "sha512-fAeUqfV5ndhxRwai8cXGzdLvul9utWOmeTkv69unv4ZXixjn61Z+p9lCWdwOwA3TYboG3BwdVuN/RDjhBRl0mw=="],

    "@tailwindcss/oxide-freebsd-x64": ["@tailwindcss/oxide-freebsd-x64@4.3.3", "", { "os": "freebsd", "cpu": "x64" }, "sha512-iyf5bV6+wnAlflVeEy7R25dupxTNECZN5QMI0qNT6eT+EgaGdZcKhGkr5SdoaWiLJ3spLqIY9VCeSGrwmtg4kw=="],

    "@tailwindcss/oxide-linux-arm-gnueabihf": ["@tailwindcss/oxide-linux-arm-gnueabihf@4.3.3", "", { "os": "linux", "cpu": "arm" }, "sha512-aAYUprJAJQWWbRrPvtjdroZ56Md+JM8pMiopS6xGEwDfLhqj+2ver2p4nU4Mb3CRqcMmNBjo8KkUgcxhkzVQGQ=="],

    "@tailwindcss/oxide-linux-arm64-gnu": ["@tailwindcss/oxide-linux-arm64-gnu@4.3.3", "", { "os": "linux", "cpu": "arm64" }, "sha512-nDxldcEENOxZRzC2uu9jrutZdAAQtb+8WWDCSnWL1zvBk1+FN+x6MtDViPB5AJMfttVCUhehGWus3XBPgatM/w=="],

    "@tailwindcss/oxide-linux-arm64-musl": ["@tailwindcss/oxide-linux-arm64-musl@4.3.3", "", { "os": "linux", "cpu": "arm64" }, "sha512-Md44bD6veX/PC5iyF8cDVnw4HBIANZepRZZ7a8DQOvkfo5WUBwcp6iAuCUz23u+4SUkhJlD3eL7hNdW8ezd/kA=="],

    "@tailwindcss/oxide-linux-x64-gnu": ["@tailwindcss/oxide-linux-x64-gnu@4.3.3", "", { "os": "linux", "cpu": "x64" }, "sha512-tx7us1muwOKAKWao2v/GaafFeQboE6aj88vC6ziN2NCGcRm8gWUhwjzg+YdVB1e4boAtdtma4L43onunI6NS4w=="],

    "@tailwindcss/oxide-linux-x64-musl": ["@tailwindcss/oxide-linux-x64-musl@4.3.3", "", { "os": "linux", "cpu": "x64" }, "sha512-SJxX60smvHgasZoBy11dX6YRjXJFovwWBoedhbQPOBzgFWBHGB+TVPWB9BxzR7TTxU8FQZAI2AyiNCMzFm8Img=="],

    "@tailwindcss/oxide-wasm32-wasi": ["@tailwindcss/oxide-wasm32-wasi@4.3.3", "", { "dependencies": { "@emnapi/core": "^1.11.1", "@emnapi/runtime": "^1.11.1", "@emnapi/wasi-threads": "^1.2.2", "@napi-rs/wasm-runtime": "^1.1.4", "@tybys/wasm-util": "^0.10.2", "tslib": "^2.8.1" }, "cpu": "none" }, "sha512-jx1+rPhY/5Ympkktd656HBWEBLxP7dH06losBLjjf5vgCODXvi9KhtftWcMIwTFIDqBr7cRnQkdLnAG+IOlGvQ=="],

    "@tailwindcss/oxide-win32-arm64-msvc": ["@tailwindcss/oxide-win32-arm64-msvc@4.3.3", "", { "os": "win32", "cpu": "arm64" }, "sha512-3rc292Ca2ceK6Ulcc/bAVnTs/3nDtoPhyEKlgPv+yQJQi/JS/AMJlqzxvlDacL1nekbrcf6bTqp/jV4qgnPxNQ=="],

    "@tailwindcss/oxide-win32-x64-msvc": ["@tailwindcss/oxide-win32-x64-msvc@4.3.3", "", { "os": "win32", "cpu": "x64" }, "sha512-yJ0pwIVc/nYeGoV02WtsN8KYyLQv7kyI2wDnkezyJlGGjkd4QLwDGAwl47YpPJeuI0M0ObaXGSPjvWDPeTPggw=="],

    "@tailwindcss/vite": ["@tailwindcss/vite@4.3.3", "", { "dependencies": { "@tailwindcss/node": "4.3.3", "@tailwindcss/oxide": "4.3.3", "tailwindcss": "4.3.3" }, "peerDependencies": { "vite": "^5.2.0 || ^6 || ^7 || ^8" } }, "sha512-yYU8cogLeSh/ms2jh8Fj7jaba/EWa7Ja6GoUqYZaraEuCI5YS6ms6ObZgjjedm+jm6XZjdNRWBpPP6Z86oOxcw=="],

    "@types/babel__core": ["@types/babel__core@7.20.5", "", { "dependencies": { "@babel/parser": "^7.20.7", "@babel/types": "^7.20.7", "@types/babel__generator": "*", "@types/babel__template": "*", "@types/babel__traverse": "*" } }, "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA=="],

    "@types/babel__generator": ["@types/babel__generator@7.27.0", "", { "dependencies": { "@babel/types": "^7.0.0" } }, "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg=="],

    "@types/babel__template": ["@types/babel__template@7.4.4", "", { "dependencies": { "@babel/parser": "^7.1.0", "@babel/types": "^7.0.0" } }, "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A=="],

    "@types/babel__traverse": ["@types/babel__traverse@7.28.0", "", { "dependencies": { "@babel/types": "^7.28.2" } }, "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q=="],

    "@types/body-parser": ["@types/body-parser@1.19.6", "", { "dependencies": { "@types/connect": "*", "@types/node": "*" } }, "sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g=="],

    "@types/canvas-confetti": ["@types/canvas-confetti@1.9.0", "", {}, "sha512-aBGj/dULrimR1XDZLtG9JwxX1b4HPRF6CX9Yfwh3NvstZEm1ZL7RBnel4keCPSqs1ANRu1u2Aoz9R+VmtjYuTg=="],

    "@types/connect": ["@types/connect@3.4.38", "", { "dependencies": { "@types/node": "*" } }, "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug=="],

    "@types/estree": ["@types/estree@1.0.9", "", {}, "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg=="],

    "@types/express": ["@types/express@4.17.25", "", { "dependencies": { "@types/body-parser": "*", "@types/express-serve-static-core": "^4.17.33", "@types/qs": "*", "@types/serve-static": "^1" } }, "sha512-dVd04UKsfpINUnK0yBoYHDF3xu7xVH4BuDotC/xGuycx4CgbP48X/KF/586bcObxT0HENHXEU8Nqtu6NR+eKhw=="],

    "@types/express-serve-static-core": ["@types/express-serve-static-core@4.19.9", "", { "dependencies": { "@types/node": "*", "@types/qs": "*", "@types/range-parser": "*", "@types/send": "*" } }, "sha512-QP2ESEe/ImWY0HDwNAnK9PvEffUyhLTnWkk7KXzHfyeWAnlrDe1fN77bXl6ia8KT3wPlmA7t9/VPRpnf4Ex9sg=="],

    "@types/http-errors": ["@types/http-errors@2.0.5", "", {}, "sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg=="],

    "@types/mime": ["@types/mime@1.3.5", "", {}, "sha512-/pyBZWSLD2n0dcHE3hq8s8ZvcETHtEuF+3E7XVt0Ig2nvsVQXdghHVcEkIWjy9A0wKfTn97a/PSDYohKIlnP/w=="],

    "@types/node": ["@types/node@22.20.2", "", { "dependencies": { "undici-types": "~6.21.0" } }, "sha512-xlvWf4Vs9n1PEVYwP1n4vvG07M6y8WgvJ2t0vbrWTmijsIHp1cS+uJ2kMIRdY3nHZK0nCYKrPeD171+SzF4/zw=="],

    "@types/qrcode": ["@types/qrcode@1.5.6", "", { "dependencies": { "@types/node": "*" } }, "sha512-te7NQcV2BOvdj2b1hCAHzAoMNuj65kNBMz0KBaxM6c3VGBOhU0dURQKOtH8CFNI/dsKkwlv32p26qYQTWoB5bw=="],

    "@types/qs": ["@types/qs@6.15.1", "", {}, "sha512-GZHUBZR9hckSUhrxmp1nG6NwdpM9fCunJwyThLW1X3AyHgd9IlHb6VANpQQqDr2o/qQp6McZ3y/IA2rVzKzSbw=="],

    "@types/range-parser": ["@types/range-parser@1.2.7", "", {}, "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ=="],

    "@types/retry": ["@types/retry@0.12.0", "", {}, "sha512-wWKOClTTiizcZhXnPY4wikVAwmdYHp8q6DmC+EJUzAMsycb7HB32Kh9RN4+0gExjmPmZSAQjgURXIGATPegAvA=="],

    "@types/send": ["@types/send@1.2.1", "", { "dependencies": { "@types/node": "*" } }, "sha512-arsCikDvlU99zl1g69TcAB3mzZPpxgw0UQnaHeC1Nwb015xp8bknZv5rIfri9xTOcMuaVgvabfIRA7PSZVuZIQ=="],

    "@types/serve-static": ["@types/serve-static@1.15.10", "", { "dependencies": { "@types/http-errors": "*", "@types/node": "*", "@types/send": "<1" } }, "sha512-tRs1dB+g8Itk72rlSI2ZrW6vZg0YrLI81iQSTkMmOqnqCaNr/8Ek4VwWcN5vZgCYWbg/JJSGBlUaYGAOP73qBw=="],

    "@vitejs/plugin-react": ["@vitejs/plugin-react@5.2.0", "", { "dependencies": { "@babel/core": "^7.29.0", "@babel/plugin-transform-react-jsx-self": "^7.27.1", "@babel/plugin-transform-react-jsx-source": "^7.27.1", "@rolldown/pluginutils": "1.0.0-rc.3", "@types/babel__core": "^7.20.5", "react-refresh": "^0.18.0" }, "peerDependencies": { "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0" } }, "sha512-YmKkfhOAi3wsB1PhJq5Scj3GXMn3WvtQ/JC0xoopuHoXSdmtdStOpFrYaT1kie2YgFBcIe64ROzMYRjCrYOdYw=="],

    "accepts": ["accepts@1.3.8", "", { "dependencies": { "mime-types": "~2.1.34", "negotiator": "0.6.3" } }, "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw=="],

    "agent-base": ["agent-base@7.1.4", "", {}, "sha512-MnA+YT8fwfJPgBx3m60MNqakm30XOkyIoH1y6huTQvC0PwZG7ki8NacLBcrPbNoo8vEZy7Jpuk7+jMO+CUovTQ=="],

    "ansi-regex": ["ansi-regex@5.0.1", "", {}, "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ=="],

    "ansi-styles": ["ansi-styles@4.3.0", "", { "dependencies": { "color-convert": "^2.0.1" } }, "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg=="],

    "array-flatten": ["array-flatten@1.1.1", "", {}, "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg=="],

    "autoprefixer": ["autoprefixer@10.5.6", "", { "dependencies": { "browserslist": "^4.28.9", "caniuse-lite": "^1.0.30001810", "fraction.js": "^5.3.4", "picocolors": "^1.1.1", "postcss-value-parser": "^4.2.0" }, "peerDependencies": { "postcss": "^8.1.0" }, "bin": { "autoprefixer": "bin/autoprefixer" } }, "sha512-HiH4oYNc5+DQEx/b8FPfMj+WHH/WWUBmbN5r1Uf/ixtfyFkk+wGIlfJT/RD5eAyzlwkeYRtZUCI8qrEi26pl2g=="],

    "base64-js": ["base64-js@1.5.1", "", {}, "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA=="],

    "baseline-browser-mapping": ["baseline-browser-mapping@2.11.22", "", { "bin": { "baseline-browser-mapping": "dist/cli.cjs" } }, "sha512-pWc4w51fBFd7mav43/zKRC+RI6f4yfzQoVlfvE8dECePyfkn1bzLp01Fj0QACcyCZyFhiEMyD2qScfKRWgWibA=="],

    "bignumber.js": ["bignumber.js@9.3.1", "", {}, "sha512-Ko0uX15oIUS7wJ3Rb30Fs6SkVbLmPBAKdlm7q9+ak9bbIeFf0MwuBsQV6z7+X768/cHsfg+WlysDWJcmthjsjQ=="],

    "body-parser": ["body-parser@1.20.8", "", { "dependencies": { "bytes": "~3.1.2", "content-type": "~1.0.5", "debug": "2.6.9", "depd": "2.0.0", "destroy": "~1.2.0", "http-errors": "~2.0.1", "iconv-lite": "~0.4.24", "on-finished": "~2.4.1", "qs": "~6.16.0", "raw-body": "~2.5.3", "type-is": "~1.6.18", "unpipe": "~1.0.0" } }, "sha512-JNcyFQ64OiijEkPzUBTCe+hyPXUD/3LEldGQ6iF5LR1w00mx9o7xtDWHXBY2iItjdCFGoilOLNQbH943ut7pHA=="],

    "browserslist": ["browserslist@4.28.9", "", { "dependencies": { "baseline-browser-mapping": "^2.11.20", "caniuse-lite": "^1.0.30001810", "electron-to-chromium": "^1.5.420", "node-releases": "^2.0.54", "update-browserslist-db": "^1.3.2" }, "bin": { "browserslist": "cli.js" } }, "sha512-EWazOblFYUvlGZcfGhPUPmYh3nikUxBVb+y9MJun5f3hBi812X+8MSQTujLBtgK3cf51fJWbWfOjyeO954d+Eg=="],

    "buffer-equal-constant-time": ["buffer-equal-constant-time@1.0.1", "", {}, "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA=="],

    "bytes": ["bytes@3.1.2", "", {}, "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg=="],

    "call-bind-apply-helpers": ["call-bind-apply-helpers@1.0.2", "", { "dependencies": { "es-errors": "^1.3.0", "function-bind": "^1.1.2" } }, "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ=="],

    "call-bound": ["call-bound@1.0.4", "", { "dependencies": { "call-bind-apply-helpers": "^1.0.2", "get-intrinsic": "^1.3.0" } }, "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg=="],

    "camelcase": ["camelcase@5.3.1", "", {}, "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="],

    "caniuse-lite": ["caniuse-lite@1.0.30001810", "", {}, "sha512-TITQPUkaz+aVk5GL6NhOdwk1aEaNTSDPsGFWrTuhKGtjTF70jL/Oht2W4c6rXUe5fu7Ie19VIahAXHIIiWWNeg=="],

    "canvas-confetti": ["canvas-confetti@1.9.4", "", {}, "sha512-yxQbJkAVrFXWNbTUjPqjF7G+g6pDotOUHGbkZq2NELZUMDpiJ85rIEazVb8GTaAptNW2miJAXbs1BtioA251Pw=="],

    "cliui": ["cliui@6.0.0", "", { "dependencies": { "string-width": "^4.2.0", "strip-ansi": "^6.0.0", "wrap-ansi": "^6.2.0" } }, "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ=="],

    "color-convert": ["color-convert@2.0.1", "", { "dependencies": { "color-name": "~1.1.4" } }, "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ=="],

    "color-name": ["color-name@1.1.4", "", {}, "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="],

    "content-disposition": ["content-disposition@0.5.4", "", { "dependencies": { "safe-buffer": "5.2.1" } }, "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ=="],

    "content-type": ["content-type@1.0.5", "", {}, "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA=="],

    "convert-source-map": ["convert-source-map@2.0.0", "", {}, "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg=="],

    "cookie": ["cookie@0.7.2", "", {}, "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w=="],

    "cookie-signature": ["cookie-signature@1.0.7", "", {}, "sha512-NXdYc3dLr47pBkpUCHtKSwIOQXLVn8dZEuywboCOJY/osA0wFSLlSawr3KN8qXJEyX66FcONTH8EIlVuK0yyFA=="],

    "data-uri-to-buffer": ["data-uri-to-buffer@4.0.1", "", {}, "sha512-0R9ikRb668HB7QDxT1vkpuUBtqc53YyAwMwGeUFKRojY/NWKvdZ+9UYtRfGmhqNbRkTSVpMbmyhXipFFv2cb/A=="],

    "debug": ["debug@2.6.9", "", { "dependencies": { "ms": "2.0.0" } }, "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA=="],

    "decamelize": ["decamelize@1.2.0", "", {}, "sha512-z2S+W9X73hAUUki+N+9Za2lBlun89zigOyGrsax+KUQ6wKW4ZoWpEYBkGhQjwAjjDCkWxhY0VKEhk8wzY7F5cA=="],

    "depd": ["depd@2.0.0", "", {}, "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw=="],

    "destroy": ["destroy@1.2.0", "", {}, "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg=="],

    "detect-libc": ["detect-libc@2.1.2", "", {}, "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ=="],

    "dijkstrajs": ["dijkstrajs@1.0.3", "", {}, "sha512-qiSlmBq9+BCdCA/L46dw8Uy93mloxsPSbwnm5yrKn2vMPiy8KyAskTF6zuV/j5BMsmOGZDPs7KjU+mjb670kfA=="],

    "dotenv": ["dotenv@17.4.2", "", {}, "sha512-nI4U3TottKAcAD9LLud4Cb7b2QztQMUEfHbvhTH09bqXTxnSie8WnjPALV/WMCrJZ6UV/qHJ6L03OqO3LcdYZw=="],

    "dunder-proto": ["dunder-proto@1.0.1", "", { "dependencies": { "call-bind-apply-helpers": "^1.0.1", "es-errors": "^1.3.0", "gopd": "^1.2.0" } }, "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A=="],

    "ecdsa-sig-formatter": ["ecdsa-sig-formatter@1.0.11", "", { "dependencies": { "safe-buffer": "^5.0.1" } }, "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ=="],

    "ee-first": ["ee-first@1.1.1", "", {}, "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow=="],

    "electron-to-chromium": ["electron-to-chromium@1.5.427", "", {}, "sha512-n14zb3FdsChZ2BNobqNHAJMcP3ifFv4paox2LvCrfVAQcqGiSURgbJl+PfMpHVCNFkStnNc+RRVtPBTVW5PDgw=="],

    "emoji-regex": ["emoji-regex@8.0.0", "", {}, "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="],

    "encodeurl": ["encodeurl@2.0.0", "", {}, "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg=="],

    "enhanced-resolve": ["enhanced-resolve@5.24.5", "", { "dependencies": { "graceful-fs": "^4.2.4", "tapable": "^2.3.3" } }, "sha512-L1l8TNvomm6UVW5B253AGxQagSQr+vGwhMlrrfRS2qmhx46AMpMVJKQYLvWYbysTMY8VoicOvzHzoHMbyzB+4A=="],

    "es-define-property": ["es-define-property@1.0.1", "", {}, "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g=="],

    "es-errors": ["es-errors@1.3.0", "", {}, "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw=="],

    "es-object-atoms": ["es-object-atoms@1.1.2", "", { "dependencies": { "es-errors": "^1.3.0" } }, "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw=="],

    "esbuild": ["esbuild@0.25.12", "", { "optionalDependencies": { "@esbuild/aix-ppc64": "0.25.12", "@esbuild/android-arm": "0.25.12", "@esbuild/android-arm64": "0.25.12", "@esbuild/android-x64": "0.25.12", "@esbuild/darwin-arm64": "0.25.12", "@esbuild/darwin-x64": "0.25.12", "@esbuild/freebsd-arm64": "0.25.12", "@esbuild/freebsd-x64": "0.25.12", "@esbuild/linux-arm": "0.25.12", "@esbuild/linux-arm64": "0.25.12", "@esbuild/linux-ia32": "0.25.12", "@esbuild/linux-loong64": "0.25.12", "@esbuild/linux-mips64el": "0.25.12", "@esbuild/linux-ppc64": "0.25.12", "@esbuild/linux-riscv64": "0.25.12", "@esbuild/linux-s390x": "0.25.12", "@esbuild/linux-x64": "0.25.12", "@esbuild/netbsd-arm64": "0.25.12", "@esbuild/netbsd-x64": "0.25.12", "@esbuild/openbsd-arm64": "0.25.12", "@esbuild/openbsd-x64": "0.25.12", "@esbuild/openharmony-arm64": "0.25.12", "@esbuild/sunos-x64": "0.25.12", "@esbuild/win32-arm64": "0.25.12", "@esbuild/win32-ia32": "0.25.12", "@esbuild/win32-x64": "0.25.12" }, "bin": { "esbuild": "bin/esbuild" } }, "sha512-bbPBYYrtZbkt6Os6FiTLCTFxvq4tt3JKall1vRwshA3fdVztsLAatFaZobhkBC8/BrPetoa0oksYoKXoG4ryJg=="],

    "escalade": ["escalade@3.2.0", "", {}, "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA=="],

    "escape-html": ["escape-html@1.0.3", "", {}, "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow=="],

    "etag": ["etag@1.8.1", "", {}, "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg=="],

    "express": ["express@4.22.2", "", { "dependencies": { "accepts": "~1.3.8", "array-flatten": "1.1.1", "body-parser": "~1.20.5", "content-disposition": "~0.5.4", "content-type": "~1.0.4", "cookie": "~0.7.1", "cookie-signature": "~1.0.6", "debug": "2.6.9", "depd": "2.0.0", "encodeurl": "~2.0.0", "escape-html": "~1.0.3", "etag": "~1.8.1", "finalhandler": "~1.3.1", "fresh": "~0.5.2", "http-errors": "~2.0.0", "merge-descriptors": "1.0.3", "methods": "~1.1.2", "on-finished": "~2.4.1", "parseurl": "~1.3.3", "path-to-regexp": "~0.1.12", "proxy-addr": "~2.0.7", "qs": "~6.15.1", "range-parser": "~1.2.1", "safe-buffer": "5.2.1", "send": "~0.19.0", "serve-static": "~1.16.2", "setprototypeof": "1.2.0", "statuses": "~2.0.1", "type-is": "~1.6.18", "utils-merge": "1.0.1", "vary": "~1.1.2" } }, "sha512-IuL+Elrou2ZvCFHs18/CIzy2Nzvo25nZ1/D2eIZlz7c+QUayAcYoiM2BthCjs+EBHVpjYjcuLDAiCWgeIX3X1Q=="],

    "extend": ["extend@3.0.2", "", {}, "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g=="],

    "fdir": ["fdir@6.5.0", "", { "peerDependencies": { "picomatch": "^3 || ^4" }, "optionalPeers": ["picomatch"] }, "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg=="],

    "fetch-blob": ["fetch-blob@3.2.0", "", { "dependencies": { "node-domexception": "^1.0.0", "web-streams-polyfill": "^3.0.3" } }, "sha512-7yAQpD2UMJzLi1Dqv7qFYnPbaPx7ZfFK6PiIxQ4PfkGPyNyl2Ugx+a/umUonmKqjhM4DnfbMvdX6otXq83soQQ=="],

    "finalhandler": ["finalhandler@1.3.2", "", { "dependencies": { "debug": "2.6.9", "encodeurl": "~2.0.0", "escape-html": "~1.0.3", "on-finished": "~2.4.1", "parseurl": "~1.3.3", "statuses": "~2.0.2", "unpipe": "~1.0.0" } }, "sha512-aA4RyPcd3badbdABGDuTXCMTtOneUCAYH/gxoYRTZlIJdF0YPWuGqiAsIrhNnnqdXGswYk6dGujem4w80UJFhg=="],

    "find-up": ["find-up@4.1.0", "", { "dependencies": { "locate-path": "^5.0.0", "path-exists": "^4.0.0" } }, "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw=="],

    "formdata-polyfill": ["formdata-polyfill@4.0.10", "", { "dependencies": { "fetch-blob": "^3.1.2" } }, "sha512-buewHzMvYL29jdeQTVILecSaZKnt/RJWjoZCF5OW60Z67/GmSLBkOFM7qh1PI3zFNtJbaZL5eQu1vLfazOwj4g=="],

    "forwarded": ["forwarded@0.2.0", "", {}, "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow=="],

    "fraction.js": ["fraction.js@5.3.4", "", {}, "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ=="],

    "framer-motion": ["framer-motion@12.43.0", "", { "dependencies": { "motion-dom": "^12.43.0", "motion-utils": "^12.39.0", "tslib": "^2.4.0" }, "peerDependencies": { "@emotion/is-prop-valid": "*", "react": "^18.0.0 || ^19.0.0", "react-dom": "^18.0.0 || ^19.0.0" }, "optionalPeers": ["@emotion/is-prop-valid", "react", "react-dom"] }, "sha512-1eaL3RvR/kAlbG7UYcpMptEyzPoENO0c6w7ZnB3/hh2vSAz/6uGAFn6fdoqTBguNstf3MsFhJHsD/0DHiclG+g=="],

    "fresh": ["fresh@0.5.2", "", {}, "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q=="],

    "fsevents": ["fsevents@2.3.3", "", { "os": "darwin" }, "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw=="],

    "function-bind": ["function-bind@1.1.2", "", {}, "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA=="],

    "gaxios": ["gaxios@7.3.1", "", { "dependencies": { "extend": "^3.0.2", "https-proxy-agent": "^7.0.1", "node-fetch": "^3.3.2" } }, "sha512-kB3rzJV7d9juLZh8/56QTXCwQfxyhdOMdyYk1HdQKFtF8TJTDTZQJtixWIwXdE9Jji91mC41DUNpjleo4L4eAQ=="],

    "gcp-metadata": ["gcp-metadata@8.1.2", "", { "dependencies": { "gaxios": "^7.0.0", "google-logging-utils": "^1.0.0", "json-bigint": "^1.0.0" } }, "sha512-zV/5HKTfCeKWnxG0Dmrw51hEWFGfcF2xiXqcA3+J90WDuP0SvoiSO5ORvcBsifmx/FoIjgQN3oNOGaQ5PhLFkg=="],

    "gensync": ["gensync@1.0.0-beta.2", "", {}, "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg=="],

    "get-caller-file": ["get-caller-file@2.0.5", "", {}, "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="],

    "get-intrinsic": ["get-intrinsic@1.3.0", "", { "dependencies": { "call-bind-apply-helpers": "^1.0.2", "es-define-property": "^1.0.1", "es-errors": "^1.3.0", "es-object-atoms": "^1.1.1", "function-bind": "^1.1.2", "get-proto": "^1.0.1", "gopd": "^1.2.0", "has-symbols": "^1.1.0", "hasown": "^2.0.2", "math-intrinsics": "^1.1.0" } }, "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ=="],

    "get-proto": ["get-proto@1.0.1", "", { "dependencies": { "dunder-proto": "^1.0.1", "es-object-atoms": "^1.0.0" } }, "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g=="],

    "google-auth-library": ["google-auth-library@10.9.1", "", { "dependencies": { "base64-js": "^1.3.0", "ecdsa-sig-formatter": "^1.0.11", "gaxios": "^7.1.4", "gcp-metadata": "8.1.2", "google-logging-utils": "1.1.3", "jws": "^4.0.0" } }, "sha512-i1ydyHrqcIxXkWh/uBmVkzCvIuq5yiK2ATndIe5XxKholrG/MTYP9xGYka4sQhrbIAgGjL2B6NOE7rFaiF3fXw=="],

    "google-logging-utils": ["google-logging-utils@1.1.3", "", {}, "sha512-eAmLkjDjAFCVXg7A1unxHsLf961m6y17QFqXqAXGj/gVkKFrEICfStRfwUlGNfeCEjNRa32JEWOUTlYXPyyKvA=="],

    "gopd": ["gopd@1.2.0", "", {}, "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg=="],

    "graceful-fs": ["graceful-fs@4.2.11", "", {}, "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ=="],

    "has-symbols": ["has-symbols@1.1.0", "", {}, "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ=="],

    "hasown": ["hasown@2.0.4", "", { "dependencies": { "function-bind": "^1.1.2" } }, "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A=="],

    "http-errors": ["http-errors@2.0.1", "", { "dependencies": { "depd": "~2.0.0", "inherits": "~2.0.4", "setprototypeof": "~1.2.0", "statuses": "~2.0.2", "toidentifier": "~1.0.1" } }, "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ=="],

    "https-proxy-agent": ["https-proxy-agent@7.0.6", "", { "dependencies": { "agent-base": "^7.1.2", "debug": "4" } }, "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw=="],

    "iconv-lite": ["iconv-lite@0.4.24", "", { "dependencies": { "safer-buffer": ">= 2.1.2 < 3" } }, "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA=="],

    "inherits": ["inherits@2.0.4", "", {}, "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="],

    "ipaddr.js": ["ipaddr.js@1.9.1", "", {}, "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="],

    "is-fullwidth-code-point": ["is-fullwidth-code-point@3.0.0", "", {}, "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="],

    "jiti": ["jiti@2.7.0", "", { "bin": { "jiti": "lib/jiti-cli.mjs" } }, "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ=="],

    "js-tokens": ["js-tokens@4.0.0", "", {}, "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="],

    "jsesc": ["jsesc@3.1.0", "", { "bin": { "jsesc": "bin/jsesc" } }, "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA=="],

    "json-bigint": ["json-bigint@1.0.0", "", { "dependencies": { "bignumber.js": "^9.0.0" } }, "sha512-SiPv/8VpZuWbvLSMtTDU8hEfrZWg/mH/nV/b4o0CYbSxu1UIQPLdwKOCIyLQX+VIPO5vrLX3i8qtqFyhdPSUSQ=="],

    "json5": ["json5@2.2.3", "", { "bin": { "json5": "lib/cli.js" } }, "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg=="],

    "jwa": ["jwa@2.0.1", "", { "dependencies": { "buffer-equal-constant-time": "^1.0.1", "ecdsa-sig-formatter": "1.0.11", "safe-buffer": "^5.0.1" } }, "sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg=="],

    "jws": ["jws@4.0.1", "", { "dependencies": { "jwa": "^2.0.1", "safe-buffer": "^5.0.1" } }, "sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA=="],

    "lightningcss": ["lightningcss@1.32.0", "", { "dependencies": { "detect-libc": "^2.0.3" }, "optionalDependencies": { "lightningcss-android-arm64": "1.32.0", "lightningcss-darwin-arm64": "1.32.0", "lightningcss-darwin-x64": "1.32.0", "lightningcss-freebsd-x64": "1.32.0", "lightningcss-linux-arm-gnueabihf": "1.32.0", "lightningcss-linux-arm64-gnu": "1.32.0", "lightningcss-linux-arm64-musl": "1.32.0", "lightningcss-linux-x64-gnu": "1.32.0", "lightningcss-linux-x64-musl": "1.32.0", "lightningcss-win32-arm64-msvc": "1.32.0", "lightningcss-win32-x64-msvc": "1.32.0" } }, "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ=="],

    "lightningcss-android-arm64": ["lightningcss-android-arm64@1.32.0", "", { "os": "android", "cpu": "arm64" }, "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg=="],

    "lightningcss-darwin-arm64": ["lightningcss-darwin-arm64@1.32.0", "", { "os": "darwin", "cpu": "arm64" }, "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ=="],

    "lightningcss-darwin-x64": ["lightningcss-darwin-x64@1.32.0", "", { "os": "darwin", "cpu": "x64" }, "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w=="],

    "lightningcss-freebsd-x64": ["lightningcss-freebsd-x64@1.32.0", "", { "os": "freebsd", "cpu": "x64" }, "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig=="],

    "lightningcss-linux-arm-gnueabihf": ["lightningcss-linux-arm-gnueabihf@1.32.0", "", { "os": "linux", "cpu": "arm" }, "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw=="],

    "lightningcss-linux-arm64-gnu": ["lightningcss-linux-arm64-gnu@1.32.0", "", { "os": "linux", "cpu": "arm64" }, "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ=="],

    "lightningcss-linux-arm64-musl": ["lightningcss-linux-arm64-musl@1.32.0", "", { "os": "linux", "cpu": "arm64" }, "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg=="],

    "lightningcss-linux-x64-gnu": ["lightningcss-linux-x64-gnu@1.32.0", "", { "os": "linux", "cpu": "x64" }, "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA=="],

    "lightningcss-linux-x64-musl": ["lightningcss-linux-x64-musl@1.32.0", "", { "os": "linux", "cpu": "x64" }, "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg=="],

    "lightningcss-win32-arm64-msvc": ["lightningcss-win32-arm64-msvc@1.32.0", "", { "os": "win32", "cpu": "arm64" }, "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw=="],

    "lightningcss-win32-x64-msvc": ["lightningcss-win32-x64-msvc@1.32.0", "", { "os": "win32", "cpu": "x64" }, "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q=="],

    "locate-path": ["locate-path@5.0.0", "", { "dependencies": { "p-locate": "^4.1.0" } }, "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g=="],

    "long": ["long@5.3.2", "", {}, "sha512-mNAgZ1GmyNhD7AuqnTG3/VQ26o760+ZYBPKjPvugO8+nLbYfX6TVpJPseBvopbdY+qpZ/lKUnmEc1LeZYS3QAA=="],

    "lru-cache": ["lru-cache@5.1.1", "", { "dependencies": { "yallist": "^3.0.2" } }, "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w=="],

    "lucide-react": ["lucide-react@0.546.0", "", { "peerDependencies": { "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0" } }, "sha512-Z94u6fKT43lKeYHiVyvyR8fT7pwCzDu7RyMPpTvh054+xahSgj4HFQ+NmflvzdXsoAjYGdCguGaFKYuvq0ThCQ=="],

    "magic-string": ["magic-string@0.30.21", "", { "dependencies": { "@jridgewell/sourcemap-codec": "^1.5.5" } }, "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ=="],

    "math-intrinsics": ["math-intrinsics@1.1.0", "", {}, "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g=="],

    "media-typer": ["media-typer@0.3.0", "", {}, "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ=="],

    "merge-descriptors": ["merge-descriptors@1.0.3", "", {}, "sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ=="],

    "methods": ["methods@1.1.2", "", {}, "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w=="],

    "mime": ["mime@1.6.0", "", { "bin": { "mime": "cli.js" } }, "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="],

    "mime-db": ["mime-db@1.52.0", "", {}, "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg=="],

    "mime-types": ["mime-types@2.1.35", "", { "dependencies": { "mime-db": "1.52.0" } }, "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw=="],

    "motion": ["motion@12.43.0", "", { "dependencies": { "framer-motion": "^12.43.0", "tslib": "^2.4.0" }, "peerDependencies": { "@emotion/is-prop-valid": "*", "react": "^18.0.0 || ^19.0.0", "react-dom": "^18.0.0 || ^19.0.0" }, "optionalPeers": ["@emotion/is-prop-valid", "react", "react-dom"] }, "sha512-BQgQbSa9Hn3/mtbib0MK53y6JSANa+YKUKlaYnWzAVDH424RYQ5LVpV3pNiWH00BA2z4ojsSdMzqT7g2FQwjuQ=="],

    "motion-dom": ["motion-dom@12.43.0", "", { "dependencies": { "motion-utils": "^12.39.0" } }, "sha512-azKON4d9S65PEoFUiQTMTgPheEmzf2QngdRc50AKfJp9Q9mmcBVw22c8eMq9k8kxOFHdL7+WZY7N/5F/lwiDag=="],

    "motion-utils": ["motion-utils@12.39.0", "", {}, "sha512-8nadJAJjTtqRkmRF36FoJTrywK9nnFmnPwnSMyxaOCU7GDjN9RTMJIxx9De8ErM+vpPhMccr/6fo5WciyQLnMQ=="],

    "ms": ["ms@2.0.0", "", {}, "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A=="],

    "nanoid": ["nanoid@3.3.19", "", { "bin": { "nanoid": "bin/nanoid.cjs" } }, "sha512-Y2tUNy4ouw6tq5oDSKeQYGOyhkUBhNOcGV/02KC+6kd9eDGqdZd++mjMiIDilrBYvjEnCYvVtsuHCuP+okSfug=="],

    "negotiator": ["negotiator@0.6.3", "", {}, "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg=="],

    "node-domexception": ["node-domexception@1.0.0", "", {}, "sha512-/jKZoMpw0F8GRwl4/eLROPA3cfcXtLApP0QzLmUT/HuPCZWyB7IY9ZrMeKw2O/nFIqPQB3PVM9aYm0F312AXDQ=="],

    "node-fetch": ["node-fetch@3.3.2", "", { "dependencies": { "data-uri-to-buffer": "^4.0.0", "fetch-blob": "^3.1.4", "formdata-polyfill": "^4.0.10" } }, "sha512-dRB78srN/l6gqWulah9SrxeYnxeddIG30+GOqK/9OlLVyLg3HPnr6SqOWTWOXKRwC2eGYCkZ59NNuSgvSrpgOA=="],

    "node-releases": ["node-releases@2.0.55", "", {}, "sha512-mIrE/Cw9y+9Au6dS5vDKDhQza9YvG6w+ZrS6X+ZzA7yFW/soAeaups4Qzn1bL6g5FVy8WtP79+0j82oPIbqRjQ=="],

    "object-inspect": ["object-inspect@1.13.4", "", {}, "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew=="],

    "on-finished": ["on-finished@2.4.1", "", { "dependencies": { "ee-first": "1.1.1" } }, "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg=="],

    "p-limit": ["p-limit@2.3.0", "", { "dependencies": { "p-try": "^2.0.0" } }, "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w=="],

    "p-locate": ["p-locate@4.1.0", "", { "dependencies": { "p-limit": "^2.2.0" } }, "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A=="],

    "p-retry": ["p-retry@4.6.2", "", { "dependencies": { "@types/retry": "0.12.0", "retry": "^0.13.1" } }, "sha512-312Id396EbJdvRONlngUx0NydfrIQ5lsYu0znKVUzVvArzEIt08V1qhtyESbGVd1FGX7UKtiFp5uwKZdM8wIuQ=="],

    "p-try": ["p-try@2.2.0", "", {}, "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="],

    "parseurl": ["parseurl@1.3.3", "", {}, "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="],

    "path-exists": ["path-exists@4.0.0", "", {}, "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="],

    "path-to-regexp": ["path-to-regexp@0.1.13", "", {}, "sha512-A/AGNMFN3c8bOlvV9RreMdrv7jsmF9XIfDeCd87+I8RNg6s78BhJxMu69NEMHBSJFxKidViTEdruRwEk/WIKqA=="],

    "picocolors": ["picocolors@1.1.1", "", {}, "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA=="],

    "picomatch": ["picomatch@4.0.7", "", {}, "sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA=="],

    "pngjs": ["pngjs@5.0.0", "", {}, "sha512-40QW5YalBNfQo5yRYmiw7Yz6TKKVr3h6970B2YE+3fQpsWcrbj1PzJgxeJ19DRQjhMbKPIuMY8rFaXc8moolVw=="],

    "postcss": ["postcss@8.5.28", "", { "dependencies": { "nanoid": "^3.3.18", "picocolors": "^1.1.1", "source-map-js": "^1.2.1" } }, "sha512-RRuzqDtt5Y9h3quz5hWhK+TPnsmVs6WwSU6LkJMeY4HstUEDuYTG8UJSdawMRzmzAtV+KEoG8N3Qg2qLy5vM/A=="],

    "postcss-value-parser": ["postcss-value-parser@4.2.0", "", {}, "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ=="],

    "protobufjs": ["protobufjs@7.6.6", "", { "dependencies": { "@protobufjs/aspromise": "^1.1.2", "@protobufjs/base64": "^1.1.2", "@protobufjs/codegen": "^2.0.5", "@protobufjs/eventemitter": "^1.1.1", "@protobufjs/fetch": "^1.1.1", "@protobufjs/float": "^1.0.2", "@protobufjs/path": "^1.1.2", "@protobufjs/pool": "^1.1.0", "@protobufjs/utf8": "^1.1.1", "@types/node": ">=13.7.0", "long": "^5.3.2" } }, "sha512-dYDWdjSl5RNb7SgPxGQcRU+GtvP7s2fpkrY0r432PcOIaZ0/rBcxEZnQN67iJhFuQiVw754JDoPruPCNdGsbjg=="],

    "proxy-addr": ["proxy-addr@2.0.7", "", { "dependencies": { "forwarded": "0.2.0", "ipaddr.js": "1.9.1" } }, "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg=="],

    "qrcode": ["qrcode@1.5.4", "", { "dependencies": { "dijkstrajs": "^1.0.1", "pngjs": "^5.0.0", "yargs": "^15.3.1" }, "bin": { "qrcode": "bin/qrcode" } }, "sha512-1ca71Zgiu6ORjHqFBDpnSMTR2ReToX4l1Au1VFLyVeBTFavzQnv5JxMFr3ukHVKpSrSA2MCk0lNJSykjUfz7Zg=="],

    "qs": ["qs@6.15.3", "", { "dependencies": { "es-define-property": "^1.0.1", "side-channel": "^1.1.1" } }, "sha512-O9gl3zCl5h5blw1KGUzQKhA5oUXSl8rwUIM5o0S3nCXMliSvy5Dzx7/DJcI+SwgICv+IneSZwhBh1oSyEHA71A=="],

    "range-parser": ["range-parser@1.2.1", "", {}, "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="],

    "raw-body": ["raw-body@2.5.3", "", { "dependencies": { "bytes": "~3.1.2", "http-errors": "~2.0.1", "iconv-lite": "~0.4.24", "unpipe": "~1.0.0" } }, "sha512-s4VSOf6yN0rvbRZGxs8Om5CWj6seneMwK3oDb4lWDH0UPhWcxwOWw5+qk24bxq87szX1ydrwylIOp2uG1ojUpA=="],

    "react": ["react@19.3.0", "", {}, "sha512-E8LUcbtBWt20bbl2YoHfx4ZDBdxVTfOKtCZn9cDSJ4l6/nuoApcpIBcj47t2wZoVX8g2ZHuMHbiShgCR1T5Sog=="],

    "react-dom": ["react-dom@19.3.0", "", { "dependencies": { "scheduler": "^0.28.0" }, "peerDependencies": { "react": "^19.3.0" } }, "sha512-JDk8dgif51OjFoDE70+OT9ICyYr+69HlmihNwp1+Nsfbna3t5sIiCa9ZJktDmQ4/1b/rn26hIAR2uYXDMr5r0Q=="],

    "react-refresh": ["react-refresh@0.18.0", "", {}, "sha512-QgT5//D3jfjJb6Gsjxv0Slpj23ip+HtOpnNgnb2S5zU3CB26G/IDPGoy4RJB42wzFE46DRsstbW6tKHoKbhAxw=="],

    "require-directory": ["require-directory@2.1.1", "", {}, "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q=="],

    "require-main-filename": ["require-main-filename@2.0.0", "", {}, "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg=="],

    "retry": ["retry@0.13.1", "", {}, "sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg=="],

    "rollup": ["rollup@4.63.1", "", { "dependencies": { "@types/estree": "1.0.9" }, "optionalDependencies": { "@napi-rs/lzma-linux-x64-gnu": "1.5.1", "@rollup/rollup-android-arm-eabi": "4.63.1", "@rollup/rollup-android-arm64": "4.63.1", "@rollup/rollup-darwin-arm64": "4.63.1", "@rollup/rollup-darwin-x64": "4.63.1", "@rollup/rollup-freebsd-arm64": "4.63.1", "@rollup/rollup-freebsd-x64": "4.63.1", "@rollup/rollup-linux-arm-gnueabihf": "4.63.1", "@rollup/rollup-linux-arm-musleabihf": "4.63.1", "@rollup/rollup-linux-arm64-gnu": "4.63.1", "@rollup/rollup-linux-arm64-musl": "4.63.1", "@rollup/rollup-linux-loong64-gnu": "4.63.1", "@rollup/rollup-linux-loong64-musl": "4.63.1", "@rollup/rollup-linux-ppc64-gnu": "4.63.1", "@rollup/rollup-linux-ppc64-musl": "4.63.1", "@rollup/rollup-linux-riscv64-gnu": "4.63.1", "@rollup/rollup-linux-riscv64-musl": "4.63.1", "@rollup/rollup-linux-s390x-gnu": "4.63.1", "@rollup/rollup-linux-x64-gnu": "4.63.1", "@rollup/rollup-linux-x64-musl": "4.63.1", "@rollup/rollup-openbsd-x64": "4.63.1", "@rollup/rollup-openharmony-arm64": "4.63.1", "@rollup/rollup-win32-arm64-msvc": "4.63.1", "@rollup/rollup-win32-ia32-msvc": "4.63.1", "@rollup/rollup-win32-x64-gnu": "4.63.1", "@rollup/rollup-win32-x64-msvc": "4.63.1", "fsevents": "~2.3.2" }, "bin": { "rollup": "dist/bin/rollup" } }, "sha512-3Df9jsstwhccuEfmAMi9l8XUh/GOkVObmFTU7CCVBysEbcOZLl84jCtaAZMcPiMz2EGKsATzQcU+Xr3n/wU6cg=="],

    "safe-buffer": ["safe-buffer@5.2.1", "", {}, "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="],

    "safer-buffer": ["safer-buffer@2.1.2", "", {}, "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="],

    "scheduler": ["scheduler@0.28.0", "", {}, "sha512-juorfCmIkIw8tT+p5BXSm6PJjQF/ycEYmKyzURCIt/RaZIhL+PulbQ9Yu2z1HdOJDdqDTlxA1+xKBmHXJsczAw=="],

    "semver": ["semver@6.3.1", "", { "bin": { "semver": "bin/semver.js" } }, "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA=="],

    "send": ["send@0.19.2", "", { "dependencies": { "debug": "2.6.9", "depd": "2.0.0", "destroy": "1.2.0", "encodeurl": "~2.0.0", "escape-html": "~1.0.3", "etag": "~1.8.1", "fresh": "~0.5.2", "http-errors": "~2.0.1", "mime": "1.6.0", "ms": "2.1.3", "on-finished": "~2.4.1", "range-parser": "~1.2.1", "statuses": "~2.0.2" } }, "sha512-VMbMxbDeehAxpOtWJXlcUS5E8iXh6QmN+BkRX1GARS3wRaXEEgzCcB10gTQazO42tpNIya8xIyNx8fll1OFPrg=="],

    "serve-static": ["serve-static@1.16.3", "", { "dependencies": { "encodeurl": "~2.0.0", "escape-html": "~1.0.3", "parseurl": "~1.3.3", "send": "~0.19.1" } }, "sha512-x0RTqQel6g5SY7Lg6ZreMmsOzncHFU7nhnRWkKgWuMTu5NN0DR5oruckMqRvacAN9d5w6ARnRBXl9xhDCgfMeA=="],

    "set-blocking": ["set-blocking@2.0.0", "", {}, "sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw=="],

    "setprototypeof": ["setprototypeof@1.2.0", "", {}, "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="],

    "side-channel": ["side-channel@1.1.1", "", { "dependencies": { "es-errors": "^1.3.0", "object-inspect": "^1.13.4", "side-channel-list": "^1.0.1", "side-channel-map": "^1.0.1", "side-channel-weakmap": "^1.0.2" } }, "sha512-6x6dK6zJdpTzF4sQeNYxwtvBzf6Eg4GtlesS94HOvTudUeyK2WXAaIfmDgsyslYrRBeFIlsi54AYsFGUuhmvrQ=="],

    "side-channel-list": ["side-channel-list@1.0.1", "", { "dependencies": { "es-errors": "^1.3.0", "object-inspect": "^1.13.4" } }, "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w=="],

    "side-channel-map": ["side-channel-map@1.0.1", "", { "dependencies": { "call-bound": "^1.0.2", "es-errors": "^1.3.0", "get-intrinsic": "^1.2.5", "object-inspect": "^1.13.3" } }, "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA=="],

    "side-channel-weakmap": ["side-channel-weakmap@1.0.2", "", { "dependencies": { "call-bound": "^1.0.2", "es-errors": "^1.3.0", "get-intrinsic": "^1.2.5", "object-inspect": "^1.13.3", "side-channel-map": "^1.0.1" } }, "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A=="],

    "source-map-js": ["source-map-js@1.2.1", "", {}, "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA=="],

    "statuses": ["statuses@2.0.2", "", {}, "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw=="],

    "string-width": ["string-width@4.2.3", "", { "dependencies": { "emoji-regex": "^8.0.0", "is-fullwidth-code-point": "^3.0.0", "strip-ansi": "^6.0.1" } }, "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g=="],

    "strip-ansi": ["strip-ansi@6.0.1", "", { "dependencies": { "ansi-regex": "^5.0.1" } }, "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A=="],

    "tailwindcss": ["tailwindcss@4.3.3", "", {}, "sha512-gOhV3P7ufE62QDGg1zVaTgCR+EtPv92k2nIhVcVKcLmxT1sUBsQGhnZj175j+MqRt4zLF7ic+sCYjfhxMxj7YQ=="],

    "tapable": ["tapable@2.3.3", "", {}, "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A=="],

    "tinyglobby": ["tinyglobby@0.2.17", "", { "dependencies": { "fdir": "^6.5.0", "picomatch": "^4.0.4" } }, "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g=="],

    "toidentifier": ["toidentifier@1.0.1", "", {}, "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA=="],

    "tslib": ["tslib@2.8.1", "", {}, "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w=="],

    "tsx": ["tsx@4.23.13", "", { "dependencies": { "esbuild": "~0.28.0" }, "optionalDependencies": { "fsevents": "~2.3.3" }, "bin": { "tsx": "dist/cli.mjs" } }, "sha512-BL5MGkRln6aDYhb0xbQlEAGw743BaZYWdbWtdJOBriYJboKgUUYCadFp2/FpBBZquBC/ezNBn7wMMPx7FDZUDw=="],

    "type-is": ["type-is@1.6.18", "", { "dependencies": { "media-typer": "0.3.0", "mime-types": "~2.1.24" } }, "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g=="],

    "typescript": ["typescript@5.8.3", "", { "bin": { "tsc": "bin/tsc", "tsserver": "bin/tsserver" } }, "sha512-p1diW6TqL9L07nNxvRMM7hMMw4c5XOo/1ibL4aAIGmSAt9slTE1Xgw5KWuof2uTOvCg9BY7ZRi+GaF+7sfgPeQ=="],

    "undici-types": ["undici-types@6.21.0", "", {}, "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ=="],

    "unpipe": ["unpipe@1.0.0", "", {}, "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ=="],

    "update-browserslist-db": ["update-browserslist-db@1.3.3", "", { "dependencies": { "escalade": "^3.2.0", "picocolors": "^1.1.1" }, "peerDependencies": { "browserslist": ">= 4.21.0" }, "bin": { "update-browserslist-db": "cli.js" } }, "sha512-pJ2sYawQS0R/WI928Gj5GlPhTGzbMelq0+4INtSYNDV9ErKJcX6xjGWkoG/VnB3dpUm00zALaqkrUD77pO5TDQ=="],

    "utils-merge": ["utils-merge@1.0.1", "", {}, "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA=="],

    "vary": ["vary@1.1.2", "", {}, "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg=="],

    "vite": ["vite@6.4.3", "", { "dependencies": { "esbuild": "^0.25.0", "fdir": "^6.4.4", "picomatch": "^4.0.2", "postcss": "^8.5.3", "rollup": "^4.34.9", "tinyglobby": "^0.2.13" }, "optionalDependencies": { "fsevents": "~2.3.3" }, "peerDependencies": { "@types/node": "^18.0.0 || ^20.0.0 || >=22.0.0", "jiti": ">=1.21.0", "less": "*", "lightningcss": "^1.21.0", "sass": "*", "sass-embedded": "*", "stylus": "*", "sugarss": "*", "terser": "^5.16.0", "tsx": "^4.8.1", "yaml": "^2.4.2" }, "optionalPeers": ["@types/node", "jiti", "less", "lightningcss", "sass", "sass-embedded", "stylus", "sugarss", "terser", "tsx", "yaml"], "bin": { "vite": "bin/vite.js" } }, "sha512-NTKlcQjlAK7MlQoyb6LgaqHc8sso/pVyUJYWMws3jg21uTJw/LddqIFPcPqP6PzpgbIcZyKI85sFE4HBrQDA8A=="],

    "web-streams-polyfill": ["web-streams-polyfill@3.3.3", "", {}, "sha512-d2JWLCivmZYTSIoge9MsgFCZrt571BikcWGYkjC1khllbTeDlGqZ2D8vD8E/lJa8WGWbb7Plm8/XJYV7IJHZZw=="],

    "which-module": ["which-module@2.0.1", "", {}, "sha512-iBdZ57RDvnOR9AGBhML2vFZf7h8vmBjhoaZqODJBFWHVtKkDmKuHai3cx5PgVMrX5YDNp27AofYbAwctSS+vhQ=="],

    "wrap-ansi": ["wrap-ansi@6.2.0", "", { "dependencies": { "ansi-styles": "^4.0.0", "string-width": "^4.1.0", "strip-ansi": "^6.0.0" } }, "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA=="],

    "ws": ["ws@8.21.3", "", { "peerDependencies": { "bufferutil": "^4.0.1", "utf-8-validate": ">=5.0.2" }, "optionalPeers": ["bufferutil", "utf-8-validate"] }, "sha512-201TZ/kPWxoPr/OKWjquZR1SWKXcvxdH+e1xrx89b3YbmzLMFCLfnaG1HFIgWzJOEWZ7MvpK++odZufgYR50Rw=="],

    "y18n": ["y18n@4.0.3", "", {}, "sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ=="],

    "yallist": ["yallist@3.1.1", "", {}, "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="],

    "yargs": ["yargs@15.4.1", "", { "dependencies": { "cliui": "^6.0.0", "decamelize": "^1.2.0", "find-up": "^4.1.0", "get-caller-file": "^2.0.1", "require-directory": "^2.1.1", "require-main-filename": "^2.0.0", "set-blocking": "^2.0.0", "string-width": "^4.2.0", "which-module": "^2.0.0", "y18n": "^4.0.0", "yargs-parser": "^18.1.2" } }, "sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A=="],

    "yargs-parser": ["yargs-parser@18.1.3", "", { "dependencies": { "camelcase": "^5.0.0", "decamelize": "^1.2.0" } }, "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ=="],

    "@babel/core/debug": ["debug@4.4.3", "", { "dependencies": { "ms": "^2.1.3" }, "peerDependencies": { "supports-color": "*" }, "optionalPeers": ["supports-color"] }, "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA=="],

    "@babel/traverse/debug": ["debug@4.4.3", "", { "dependencies": { "ms": "^2.1.3" }, "peerDependencies": { "supports-color": "*" }, "optionalPeers": ["supports-color"] }, "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA=="],

    "@tailwindcss/oxide-wasm32-wasi/@emnapi/core": ["@emnapi/core@1.11.3", "", { "dependencies": { "@emnapi/wasi-threads": "1.2.3", "tslib": "^2.4.0" }, "bundled": true }, "sha512-zLpS5asjEb7lq8jYLq37N6XKaE41DIexlY1rF/z4/tIl3wo13Sqm28fRyfIsKZD+NZ8mM5RoKkpW/rBcuoSZSg=="],

    "@tailwindcss/oxide-wasm32-wasi/@emnapi/runtime": ["@emnapi/runtime@1.11.3", "", { "dependencies": { "tslib": "^2.4.0" }, "bundled": true }, "sha512-Xz4Tpyki7XyrpbUK1jR1AhdAdaXyhhY4lZ3neLodmhpuWfy2PAQN5B46sAiU4liOXGLkHypn/qU+jvfWSCYYLA=="],

    "@tailwindcss/oxide-wasm32-wasi/@emnapi/wasi-threads": ["@emnapi/wasi-threads@1.2.3", "", { "dependencies": { "tslib": "^2.4.0" }, "bundled": true }, "sha512-ELEBe8PsLvvJ6QMr0zLt8ffvOHW/dc1m3CEzNMg7aJUv3bMaoDtw2TXyDAwkYBuroxxuHEwhRTLJSe5sya547g=="],

    "@tailwindcss/oxide-wasm32-wasi/@napi-rs/wasm-runtime": ["@napi-rs/wasm-runtime@1.2.4", "", { "dependencies": { "@tybys/wasm-util": "^0.10.3" }, "peerDependencies": { "@emnapi/core": "^1.7.1 || ^2.0.0-alpha.4", "@emnapi/runtime": "^1.7.1 || ^2.0.0-alpha.4" }, "bundled": true }, "sha512-AJxoUD2/15ESHbvpcyjU274nsAPLuOtPHCk0vKJM5pj//Fg/B1FXNWjPnXTT9PymCYYiHo4zPj0ZomXBKhoy7g=="],

    "@tailwindcss/oxide-wasm32-wasi/@tybys/wasm-util": ["@tybys/wasm-util@0.10.3", "", { "dependencies": { "tslib": "^2.4.0" }, "bundled": true }, "sha512-F3fo1MYrRJYL3zER0OUOmkutjr1Vp23m7OsSgp7nq4SP6OqX6C/56XFIPAl5bt3zaBRjmW7SGz3u/6LwFpYcOg=="],

    "@tailwindcss/oxide-wasm32-wasi/tslib": ["tslib@2.8.1", "", { "bundled": true }, "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w=="],

    "@types/serve-static/@types/send": ["@types/send@0.17.6", "", { "dependencies": { "@types/mime": "^1", "@types/node": "*" } }, "sha512-Uqt8rPBE8SY0RK8JB1EzVOIZ32uqy8HwdxCnoCOsYrvnswqmFZ/k+9Ikidlk/ImhsdvBsloHbAlewb2IEBV/Og=="],

    "body-parser/qs": ["qs@6.16.0", "", { "dependencies": { "es-define-property": "^1.0.1", "side-channel": "^1.1.1" } }, "sha512-h6fhOIaRrID2CbEY2fqs+7t+UXZo+MLAnU5gRIq85uFtdiUPCdsApMlHhXogKVM4HM2DVbIjGNTTYH2OcmP1vA=="],

    "https-proxy-agent/debug": ["debug@4.4.3", "", { "dependencies": { "ms": "^2.1.3" }, "peerDependencies": { "supports-color": "*" }, "optionalPeers": ["supports-color"] }, "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA=="],

    "send/ms": ["ms@2.1.3", "", {}, "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="],

    "tsx/esbuild": ["esbuild@0.28.2", "", { "optionalDependencies": { "@esbuild/aix-ppc64": "0.28.2", "@esbuild/android-arm": "0.28.2", "@esbuild/android-arm64": "0.28.2", "@esbuild/android-x64": "0.28.2", "@esbuild/darwin-arm64": "0.28.2", "@esbuild/darwin-x64": "0.28.2", "@esbuild/freebsd-arm64": "0.28.2", "@esbuild/freebsd-x64": "0.28.2", "@esbuild/linux-arm": "0.28.2", "@esbuild/linux-arm64": "0.28.2", "@esbuild/linux-ia32": "0.28.2", "@esbuild/linux-loong64": "0.28.2", "@esbuild/linux-mips64el": "0.28.2", "@esbuild/linux-ppc64": "0.28.2", "@esbuild/linux-riscv64": "0.28.2", "@esbuild/linux-s390x": "0.28.2", "@esbuild/linux-x64": "0.28.2", "@esbuild/netbsd-arm64": "0.28.2", "@esbuild/netbsd-x64": "0.28.2", "@esbuild/openbsd-arm64": "0.28.2", "@esbuild/openbsd-x64": "0.28.2", "@esbuild/openharmony-arm64": "0.28.2", "@esbuild/sunos-x64": "0.28.2", "@esbuild/win32-arm64": "0.28.2", "@esbuild/win32-ia32": "0.28.2", "@esbuild/win32-x64": "0.28.2" }, "bin": { "esbuild": "bin/esbuild" } }, "sha512-HKVLS8dvII+xoKW9kmqxbRKrnWEXfJJr/FZhhJmiqIB0e053QNYFqOBouTMO/k5sID4MvCiUCvv8b9M4h32wIA=="],

    "@babel/core/debug/ms": ["ms@2.1.3", "", {}, "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="],

    "@babel/traverse/debug/ms": ["ms@2.1.3", "", {}, "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="],

    "https-proxy-agent/debug/ms": ["ms@2.1.3", "", {}, "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="],

    "tsx/esbuild/@esbuild/aix-ppc64": ["@esbuild/aix-ppc64@0.28.2", "", { "os": "aix", "cpu": "ppc64" }, "sha512-XExcO+dvLKvVtNTibSTBej1NCAbaGhWn9Ww1ZPx80qsahhPFe/8jgWP0IchNe0F3HwkU7n8ejhH8bjonqht8mQ=="],

    "tsx/esbuild/@esbuild/android-arm": ["@esbuild/android-arm@0.28.2", "", { "os": "android", "cpu": "arm" }, "sha512-kXXoiPVVGQcnIYGOeaovwOURpniDBpSq4A03qkQ+BMQqtGG6HYap3xne9C1O1yo4TR3qxlCX5IqqmX6fFo2Lqg=="],

    "tsx/esbuild/@esbuild/android-arm64": ["@esbuild/android-arm64@0.28.2", "", { "os": "android", "cpu": "arm64" }, "sha512-5YfKeeI8qWfBZIX+u2xZC3Zlb3Os/gLS2sbEKM+I4ZOcsWmHS2WLysCcQZDAFRslDUU5Oiq44gf6PYN1vGwG5A=="],

    "tsx/esbuild/@esbuild/android-x64": ["@esbuild/android-x64@0.28.2", "", { "os": "android", "cpu": "x64" }, "sha512-O387ite7SzUyCcy3JQX4P4bLtEA7bLLkx+esve5JHnyYfNTxcVpXZo9jhdB0lTKN44gztELTdU7nS8Nr16Fs1Q=="],

    "tsx/esbuild/@esbuild/darwin-arm64": ["@esbuild/darwin-arm64@0.28.2", "", { "os": "darwin", "cpu": "arm64" }, "sha512-n4KqkOQrraxHJcgjM1RvwbigfQKIKJVpM7xp+KsxiyUSrRdIXnt73VhrPAx0fV44hgfmIVKjxMN9J1t5jySVkw=="],

    "tsx/esbuild/@esbuild/darwin-x64": ["@esbuild/darwin-x64@0.28.2", "", { "os": "darwin", "cpu": "x64" }, "sha512-uq6suIWYP37qzGddBKPw5QEQPi6HiLGsO7UmkpfyaYNQ3D+rN6w6WfwH+nuqcGXWvawGwxOEroO4YGnFh95azw=="],

    "tsx/esbuild/@esbuild/freebsd-arm64": ["@esbuild/freebsd-arm64@0.28.2", "", { "os": "freebsd", "cpu": "arm64" }, "sha512-n+I0BTSRIoy+d6RPKnEVwql5UwBJolytvY4mAOIEJorKlqgPII8ix6slVVrfZ5Tnj7glIZvloylbB/EJPMWEXw=="],

    "tsx/esbuild/@esbuild/freebsd-x64": ["@esbuild/freebsd-x64@0.28.2", "", { "os": "freebsd", "cpu": "x64" }, "sha512-78XJTJkvPs0kz2w61301PJjXl4g7q3JqiYMZ/M/yVI73EHBrCRTgkhu9oqG7vPqq+a/yadEW8aD+agKlk5xrmg=="],

    "tsx/esbuild/@esbuild/linux-arm": ["@esbuild/linux-arm@0.28.2", "", { "os": "linux", "cpu": "arm" }, "sha512-XlDnu2q5yoqems+xay6wSAcg9DDD7K9RLKZEBOMZm3ckNpJBvOX20tSfby8KfrrhINDyv9V2YVZKY/SpoGJI8w=="],

    "tsx/esbuild/@esbuild/linux-arm64": ["@esbuild/linux-arm64@0.28.2", "", { "os": "linux", "cpu": "arm64" }, "sha512-pW4AC0P3it8c7do9MVM4p51FzHzdM/TZrerurgRcHJ2WTa1VQ1CIq18xncfpBJw4ojkiZZrKW2yIBWBP92j6Ug=="],

    "tsx/esbuild/@esbuild/linux-ia32": ["@esbuild/linux-ia32@0.28.2", "", { "os": "linux", "cpu": "ia32" }, "sha512-CYbnj78HsIeA+DhgUKgFCfvNsTHFhMMrinUrMZpDXJXKN8T3XViTZ/+wtHeVxEWY8ewSzTFN+nRmSwO2tZaLUQ=="],

    "tsx/esbuild/@esbuild/linux-loong64": ["@esbuild/linux-loong64@0.28.2", "", { "os": "linux", "cpu": "none" }, "sha512-buwkd8nsph4R+ajRvw0qM5Hja/TXQow3ptzWO2EbG/cqcIkHloRrdlBtQlshyYGTNFvfkfJ5tpPLVkY4DtsPfQ=="],

    "tsx/esbuild/@esbuild/linux-mips64el": ["@esbuild/linux-mips64el@0.28.2", "", { "os": "linux", "cpu": "none" }, "sha512-ZVykbDyk7519VwiNb9Lcj9m8XM6v5V9uKPvrEMkkEedVewf+0itkhahp4HDpgERXhwLRpWFypsGbG/J8s0QjJA=="],

    "tsx/esbuild/@esbuild/linux-ppc64": ["@esbuild/linux-ppc64@0.28.2", "", { "os": "linux", "cpu": "ppc64" }, "sha512-CAXl+Dtd9UUuJd8pKKdwh6MLm3MUMiqMPmhZ3tTSXPqfyQ3vDl6R5hZdZ/kYojK4ofXtdfSv1tFq8XzWx3heNQ=="],

    "tsx/esbuild/@esbuild/linux-riscv64": ["@esbuild/linux-riscv64@0.28.2", "", { "os": "linux", "cpu": "none" }, "sha512-GeXCej4IQtU1B+QlDV8W/RRvbzI3O/Stss+/bCXv4lZls5WGRtu2a+3JkA3i4qIUlMXpcHebWpF8AkJhATowuA=="],

    "tsx/esbuild/@esbuild/linux-s390x": ["@esbuild/linux-s390x@0.28.2", "", { "os": "linux", "cpu": "s390x" }, "sha512-3H1weTYZPxt/WOhByszQZybS9w5lKzUn1FDMsgEChbHWQwHYQQRfBxgCcZvPhjHfKyJjIievvMmEUawJrdY9Dg=="],

    "tsx/esbuild/@esbuild/linux-x64": ["@esbuild/linux-x64@0.28.2", "", { "os": "linux", "cpu": "x64" }, "sha512-4xTZr1FUmSoQW4XIWmit3tzQrUTZM+N3P0XV8xROKYF50XfI7xeO90+1bZvNwxIufQ9hDQVRJH5YhgPVF8A/HQ=="],

    "tsx/esbuild/@esbuild/netbsd-arm64": ["@esbuild/netbsd-arm64@0.28.2", "", { "os": "none", "cpu": "arm64" }, "sha512-sSATRjPeDBg3pdgHoQfoYBob11Kk1FGa9lui5RIHZCoCkJa9QKlvl3/vKz2usCmYYjs7ymJR/2Nnsqe+Hjt5nw=="],

    "tsx/esbuild/@esbuild/netbsd-x64": ["@esbuild/netbsd-x64@0.28.2", "", { "os": "none", "cpu": "x64" }, "sha512-lqnzCV+mM0gIADaKihiCg6ifgfU2L3h5E33rNQBN1Y4MaVGnzryzmvvf7UHxprpQdE8hpqLolJ9Rl+SkIRDpyw=="],

    "tsx/esbuild/@esbuild/openbsd-arm64": ["@esbuild/openbsd-arm64@0.28.2", "", { "os": "openbsd", "cpu": "arm64" }, "sha512-AL2qJILH7lNjrDmCQDvdxMfAUIv8KMNZOvrwAQ8i8//ntL9FflhOyMJ8OZSMBb8/AWXe3/5v5S20y3zCoZWKoQ=="],

    "tsx/esbuild/@esbuild/openbsd-x64": ["@esbuild/openbsd-x64@0.28.2", "", { "os": "openbsd", "cpu": "x64" }, "sha512-QtiuPytchRyC4rwUKhexJdQKvDuZ6hWloi3igqPQNUJCS1/v9EiO3UTOXR6A3FoMo4fnAKbWJdqaIwhOzh8qEw=="],

    "tsx/esbuild/@esbuild/openharmony-arm64": ["@esbuild/openharmony-arm64@0.28.2", "", { "os": "none", "cpu": "arm64" }, "sha512-WkhYDmpTjLvGlScA1rwjRUmhl4k8oXR3cIbtqWmELgU/dFeHHlEllxDvdWcNJV9rbzCexB5vz8gtNewWLgCT7Q=="],

    "tsx/esbuild/@esbuild/sunos-x64": ["@esbuild/sunos-x64@0.28.2", "", { "os": "sunos", "cpu": "x64" }, "sha512-GPMSkTOtMnv2U2F8gxe4Io6qmVs+YKyp832Etqqxr0hFngmXQ3rzwytelm3GIn7T4VviRUlf3sOgBOiTdvaf7g=="],

    "tsx/esbuild/@esbuild/win32-arm64": ["@esbuild/win32-arm64@0.28.2", "", { "os": "win32", "cpu": "arm64" }, "sha512-PIhhEkE9uPBleRBrQEJpUn7MBnibZzbGzYWPmY3x+YoVg/95zbjB4CxPPOQ8l5tYYM4mMaCthF8/1DIfBQQyWQ=="],

    "tsx/esbuild/@esbuild/win32-ia32": ["@esbuild/win32-ia32@0.28.2", "", { "os": "win32", "cpu": "ia32" }, "sha512-YmJbfTlvU7Sdn9BB+4PRES4oB6pxgS37MAONj+hBr/cpXS1aBPKXxNnDbu+QCWPj0o9dgyxeq79g6c5P8KeuYA=="],

    "tsx/esbuild/@esbuild/win32-x64": ["@esbuild/win32-x64@0.28.2", "", { "os": "win32", "cpu": "x64" }, "sha512-5ebpxr3nWMzrL/rnUI755Jkuee0bHL/Gq0WTF9lvcpv73wAp5eu8MfBUgWK9bhWvZjj7yX8etf/8tI8Ney695g=="],
  }
}

<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>دعوتك | منصة دعوات الزفاف الرقمية التفاعلية الفاخرة</title>
    <meta name="description" content="منصة شاملة لدعوات الزفاف والمناسبات الرقمية الفاخرة: استوديو تخصيص، معاينة ثلاثية أبعاد، لوحة تحكم إدارة الضيوف والـ RSVP، إرسال الدعوات المخصصة عبر الواتساب، ومتابعة خيارات وليمة العشاء والحضور" />
    <meta property="og:title" content="دعوتك | منصة دعوات الزفاف الرقمية التفاعلية الفاخرة" />
    <meta property="og:description" content="منصة شاملة لدعوات الزفاف والمناسبات الرقمية الفاخرة: استوديو تخصيص، معاينة ثلاثية أبعاد، لوحة تحكم إدارة الضيوف والـ RSVP، إرسال الدعوات المخصصة عبر الواتساب، ومتابعة خيارات وليمة العشاء والحضور" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@300;400;500;600;700;800;900&family=Marcellus&family=Tajawal:wght@300;400;500;700;800&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#090b10] text-[#e8e4dc] antialiased selection:bg-[#d4af37]/30 selection:text-[#f8f5ee] overflow-x-hidden">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>


{
  "name": "Remix دعوتك | منصة دعوات الزفاف الرقمية التفاعلية الفاخرة",
  "description": "منصة شاملة لدعوات الزفاف والمناسبات الرقمية الفاخرة: استوديو تخصيص، معاينة ثلاثية أبعاد، لوحة تحكم إدارة الضيوف والـ RSVP، إرسال الدعوات المخصصة عبر الواتساب، ومتابعة خيارات وليمة العشاء والحضور",
  "requestFramePermissions": [],
  "majorCapabilities": [
    "MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API"
  ]
}
{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "tsx server.ts",
    "build": "vite build && esbuild server.ts --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs",
    "start": "node dist/server.cjs",
    "preview": "vite preview",
    "clean": "rm -rf dist server.js",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@google/genai": "^2.4.0",
    "@tailwindcss/vite": "^4.1.14",
    "@types/canvas-confetti": "^1.9.0",
    "@types/qrcode": "^1.5.6",
    "@vitejs/plugin-react": "^5.0.4",
    "canvas-confetti": "^1.9.4",
    "dotenv": "^17.2.3",
    "express": "^4.21.2",
    "lucide-react": "^0.546.0",
    "motion": "^12.23.24",
    "qrcode": "^1.5.4",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^6.2.3"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "autoprefixer": "^10.4.21",
    "esbuild": "^0.25.0",
    "tailwindcss": "^4.1.14",
    "tsx": "^4.21.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.3",
    "@types/express": "^4.17.21"
  }
}

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/7025cd2c-05f4-4394-9568-9934d57add35

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

import express, { Request, Response } from 'express';
import path from 'path';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { db } from './server/db';
import { paymentEngine } from './server/paymentEngine';
import { Order, Payment } from './src/types';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper to extract or generate customer token (Ownership & Session)
function getCustomerUserId(req: Request, res: Response): string {
  let userId = (req.headers['x-customer-token'] as string) || '';
  if (!userId || userId.length < 8) {
    userId = `usr_${crypto.randomBytes(10).toString('hex')}`;
    res.setHeader('X-Customer-Token', userId);
  }
  return userId;
}

function getBaseUrl(req: Request): string {
  if (process.env.APP_URL) {
    return process.env.APP_URL.replace(/\/+$/, '');
  }
  const host = req.get('host') || `localhost:${PORT}`;
  const protocol = req.protocol === 'https' || req.get('x-forwarded-proto') === 'https' ? 'https' : 'http';
  return `${protocol}://${host}`;
}

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

/* =========================================================================
   1. PACKAGES API (Authoritative Server-Side Pricing)
   ========================================================================= */
app.get('/api/packages', (req: Request, res: Response) => {
  const packages = db.getPackages();
  res.json({ packages });
});

/* =========================================================================
   2. DRAFT INVITATION API
   ========================================================================= */
app.post('/api/invitations/draft', (req: Request, res: Response) => {
  try {
    const userId = getCustomerUserId(req, res);
    const { templateId, templateVersion, data } = req.body;

    if (!templateId || !data) {
      return res.status(400).json({ error: 'templateId and wedding data are required' });
    }

    const draft = db.createDraftInvitation({
      userId,
      templateId,
      templateVersion: templateVersion || '1.0.0',
      data
    });

    res.status(201).json({
      success: true,
      draftId: draft.id,
      invitation: draft,
      userId
    });
  } catch (err: any) {
    console.error('[API /api/invitations/draft] Error:', err);
    res.status(500).json({ error: 'Failed to create draft invitation' });
  }
});

app.put('/api/invitations/draft/:id', (req: Request, res: Response) => {
  try {
    const userId = getCustomerUserId(req, res);
    const { id } = req.params;
    const { data, templateId } = req.body;

    const existing = db.getInvitationById(id);
    if (!existing) {
      return res.status(404).json({ error: 'Invitation not found' });
    }

    // Check ownership
    if (existing.userId !== userId && req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({ error: 'Unauthorized to modify this draft' });
    }

    const updated = db.updateDraftInvitation(id, data, templateId);
    res.json({ success: true, invitation: updated });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to update draft' });
  }
});

app.get('/api/invitations/draft/:id', (req: Request, res: Response) => {
  const userId = getCustomerUserId(req, res);
  const { id } = req.params;

  const inv = db.getInvitationById(id);
  if (!inv) {
    return res.status(404).json({ error: 'Draft not found' });
  }

  // Ownership verification
  if (inv.userId !== userId && req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET_KEY) {
    return res.status(403).json({ error: 'Unauthorized access to this draft' });
  }

  res.json({ invitation: inv });
});

/* =========================================================================
   3. ORDERS API (Strict Server-Side Price Calculation)
   ========================================================================= */
app.post('/api/orders', (req: Request, res: Response) => {
  try {
    const userId = getCustomerUserId(req, res);
    const { 
      invitationId, 
      packageId, 
      templateId, 
      templateVersion, 
      customerName, 
      customerEmail, 
      customerPhone 
    } = req.body;

    if (!invitationId || !packageId) {
      return res.status(400).json({ error: 'invitationId and packageId are required' });
    }

    const invitation = db.getInvitationById(invitationId);
    if (!invitation) {
      return res.status(404).json({ error: 'Invitation draft not found' });
    }

    // Ownership check
    if (invitation.userId !== userId && req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({ error: 'Unauthorized: invitation belongs to another user' });
    }

    // CRITICAL SECURITY RULE: Find authoritative package price on the server!
    // NEVER accept 'amount' from client request body!
    const pkg = db.getPackageById(packageId);
    if (!pkg) {
      return res.status(400).json({ error: 'Invalid or inactive package selected' });
    }

    const subtotal = pkg.price;
    const discount = 0; // Discount calculation engine hook
    const tax = 0;      // Tax calculation hook
    const total = subtotal - discount + tax;

    const order = db.createOrder({
      userId,
      templateId: templateId || invitation.templateId,
      templateVersion: templateVersion || invitation.templateVersion || '1.0.0',
      packageId: pkg.id,
      invitationId: invitation.id,
      subtotal,
      discount,
      tax,
      amount: total,
      currency: pkg.currency || 'JOD',
      customerName: customerName || '',
      customerEmail: customerEmail || '',
      customerPhone: customerPhone || '',
      packageSnapshot: {
        name: pkg.name,
        description: pkg.description,
        features: pkg.features
      }
    });

    res.status(201).json({
      success: true,
      orderId: order.id,
      order,
      userId
    });
  } catch (err: any) {
    console.error('[API /api/orders] Error:', err);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

app.get('/api/orders/:orderId', (req: Request, res: Response) => {
  const userId = getCustomerUserId(req, res);
  const { orderId } = req.params;

  const order = db.getOrderById(orderId);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  // Ownership verification
  if (order.userId !== userId && req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET_KEY) {
    return res.status(403).json({ error: 'Unauthorized to view this order' });
  }

  const payments = db.getPaymentsByOrderId(orderId);
  const invitation = db.getInvitationById(order.invitationId);

  res.json({
    order,
    payments,
    invitation: order.paymentStatus === 'SUCCEEDED' ? invitation : null,
    isPaid: order.paymentStatus === 'SUCCEEDED'
  });
});

/* =========================================================================
   4. CHECKOUT INITIATION & PAYMENT ENGINE
   ========================================================================= */
app.post('/api/orders/:orderId/checkout', async (req: Request, res: Response) => {
  try {
    const userId = getCustomerUserId(req, res);
    const { orderId } = req.params;
    const { customerName, customerEmail, customerPhone } = req.body;

    const order = db.getOrderById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Ownership check
    if (order.userId !== userId && req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({ error: 'Unauthorized to checkout this order' });
    }

    if (order.paymentStatus === 'SUCCEEDED') {
      return res.json({
        alreadyPaid: true,
        order,
        checkoutUrl: `/payment/success?orderId=${order.id}`
      });
    }

    // Re-verify package price on server
    const pkg = db.getPackageById(order.packageId);
    if (!pkg) {
      return res.status(400).json({ error: 'Selected package is no longer available' });
    }

    // Update customer info if provided
    if (customerName || customerEmail || customerPhone) {
      db.updateOrder(order.id, {
        customerName: customerName || order.customerName,
        customerEmail: customerEmail || order.customerEmail,
        customerPhone: customerPhone || order.customerPhone
      });
    }

    // Create a new Payment attempt record (keeps history of all attempts)
    const provider = paymentEngine.getProvider();
    const tempProviderPaymentId = `init_${Date.now()}`;
    const payment = db.createPayment({
      orderId: order.id,
      provider: provider.name,
      providerPaymentId: tempProviderPaymentId,
      amount: order.amount,
      currency: order.currency
    });

    db.updateOrder(order.id, {
      status: 'PAYMENT_PROCESSING'
    });

    const baseUrl = getBaseUrl(req);
    const returnUrl = `${baseUrl}/payment/success?orderId=${order.id}&paymentId=${payment.id}`;
    const cancelUrl = `${baseUrl}/checkout?orderId=${order.id}&cancelled=1`;
    const webhookUrl = `${baseUrl}/api/payments/webhook`;

    // Invoke Payment Engine
    const checkoutResult = await paymentEngine.createCheckout(order, payment, {
      customerName: customerName || order.customerName,
      customerEmail: customerEmail || order.customerEmail,
      customerPhone: customerPhone || order.customerPhone,
      returnUrl,
      cancelUrl,
      webhookUrl
    });

    // Save real provider payment ID
    db.updatePayment(payment.id, {
      providerPaymentId: checkoutResult.providerPaymentId,
      metadata: checkoutResult.metadata
    });

    res.json({
      success: true,
      orderId: order.id,
      paymentId: payment.id,
      checkoutUrl: checkoutResult.checkoutUrl,
      providerPaymentId: checkoutResult.providerPaymentId
    });
  } catch (err: any) {
    console.error('[API Checkout] Error:', err);
    res.status(500).json({ error: err.message || 'Failed to initiate checkout' });
  }
});

/* =========================================================================
   5. WEBHOOK HANDLER (Server-Side Source of Truth & Idempotency)
   ========================================================================= */
app.post('/api/payments/webhook', async (req: Request, res: Response) => {
  try {
    const rawHeaders = req.headers;
    const webhookResult = await paymentEngine.handleWebhook(req.body, rawHeaders);

    if (!webhookResult.isValid) {
      console.warn('[Webhook] Invalid webhook signature or payload:', webhookResult.error);
      return res.status(400).json({ error: webhookResult.error || 'Invalid signature' });
    }

    const { orderId, providerPaymentId, status, amount, currency, idempotencyKey } = webhookResult;

    // IDEMPOTENCY CHECK: Prevent duplicate processing of the same event!
    if (idempotencyKey && db.isIdempotencyProcessed(idempotencyKey)) {
      console.log(`[Webhook] Duplicate event ${idempotencyKey} received; returning idempotent OK.`);
      return res.status(200).json({ received: true, message: 'Already processed' });
    }

    if (!orderId) {
      return res.status(400).json({ error: 'orderId missing in webhook' });
    }

    const order = db.getOrderById(orderId);
    if (!order) {
      return res.status(404).json({ error: `Order ${orderId} not found` });
    }

    // Verify amount and currency
    if (amount !== undefined && Math.abs(amount - order.amount) > 0.01) {
      console.error(`[Webhook] Amount mismatch for order ${orderId}: got ${amount}, expected ${order.amount}`);
      return res.status(400).json({ error: 'Amount mismatch' });
    }

    // Find payment attempt
    let payment = providerPaymentId ? db.getPaymentByProviderId(providerPaymentId) : undefined;
    if (!payment) {
      const attempts = db.getPaymentsByOrderId(orderId);
      payment = attempts[0];
    }

    if (status === 'SUCCEEDED') {
      if (payment) {
        db.updatePayment(payment.id, { status: 'SUCCEEDED' });
      }

      db.updateOrder(order.id, {
        status: 'PAID',
        paymentStatus: 'SUCCEEDED'
      });

      // ACTIVATION OF THE INVITATION ONLY UPON VERIFIED PAYMENT!
      const baseUrl = getBaseUrl(req);
      const activated = await db.activateInvitation(order.invitationId, baseUrl);

      console.log(`[Webhook] Order ${order.id} PAID! Invitation ${order.invitationId} ACTIVATED with publicId: ${activated.publicId}`);
    } else if (status === 'FAILED' || status === 'CANCELLED') {
      if (payment) {
        db.updatePayment(payment.id, { status });
      }
      db.updateOrder(order.id, {
        status: status === 'FAILED' ? 'FAILED' : 'CANCELLED',
        paymentStatus: status
      });
    }

    if (idempotencyKey) {
      db.recordIdempotency(idempotencyKey, { processed: true, status });
    }

    res.status(200).json({ received: true, status });
  } catch (err: any) {
    console.error('[Webhook] Exception:', err);
    res.status(500).json({ error: 'Internal webhook processing error' });
  }
});

/* =========================================================================
   6. PAYMENT STATUS VERIFICATION API (Queried by /payment/success)
   ========================================================================= */
app.post('/api/payments/verify', async (req: Request, res: Response) => {
  try {
    const userId = getCustomerUserId(req, res);
    const { orderId, paymentId } = req.body;

    if (!orderId) {
      return res.status(400).json({ error: 'orderId is required' });
    }

    const order = db.getOrderById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Ownership check
    if (order.userId !== userId && req.headers['x-admin-secret'] !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({ error: 'Unauthorized to verify this order' });
    }

    // If order already marked PAID in DB (via webhook)
    if (order.paymentStatus === 'SUCCEEDED') {
      const invitation = db.getInvitationById(order.invitationId);
      return res.json({
        isPaid: true,
        order,
        invitation: invitation && invitation.status === 'ACTIVE' ? invitation : null
      });
    }

    // If still pending, trigger provider verification
    const payments = db.getPaymentsByOrderId(order.id);
    const targetPayment = paymentId ? db.getPaymentById(paymentId) : payments[0];

    if (targetPayment && targetPayment.providerPaymentId) {
      const verifyResult = await paymentEngine.verifyPayment(
        targetPayment.providerPaymentId,
        order.id
      );

      if (verifyResult.status === 'SUCCEEDED') {
        db.updatePayment(targetPayment.id, { status: 'SUCCEEDED' });
        db.updateOrder(order.id, { status: 'PAID', paymentStatus: 'SUCCEEDED' });

        const baseUrl = getBaseUrl(req);
        await db.activateInvitation(order.invitationId, baseUrl);
        const invitation = db.getInvitationById(order.invitationId);

        return res.json({
          isPaid: true,
          order: db.getOrderById(order.id),
          invitation
        });
      } else if (verifyResult.status === 'FAILED') {
        db.updatePayment(targetPayment.id, { status: 'FAILED' });
        db.updateOrder(order.id, { status: 'FAILED', paymentStatus: 'FAILED' });
      }
    }

    res.json({
      isPaid: false,
      status: order.status,
      paymentStatus: order.paymentStatus,
      order
    });
  } catch (err: any) {
    console.error('[API /api/payments/verify] Error:', err);
    res.status(500).json({ error: 'Verification failed' });
  }
});

/* =========================================================================
   7. SECURITY GATEWAY: PUBLIC INVITATION VIEW
   (Strictly prevents bypass of payment! Returns 403 if not paid!)
   ========================================================================= */
app.get('/api/invitations/public/:publicId', (req: Request, res: Response) => {
  const { publicId } = req.params;

  if (!publicId || publicId.length < 5) {
    return res.status(400).json({ error: 'Invalid invitation token' });
  }

  const invitation = db.getInvitationByPublicId(publicId);
  if (!invitation) {
    return res.status(404).json({ error: 'Invitation not found or invalid link' });
  }

  // STRICT SERVER-SIDE ENFORCEMENT:
  // Must have status === 'ACTIVE'
  if (invitation.status !== 'ACTIVE') {
    return res.status(403).json({
      error: 'هذه الدعوة ما زالت في وضع المسودة (Draft) ولم يتم تفعيلها بعد.',
      code: 'INVITATION_NOT_ACTIVE'
    });
  }

  // Confirm that an order with paymentStatus === 'SUCCEEDED' exists for this invitation
  const allOrders = db.getAllOrders().orders;
  const associatedOrder = allOrders.find(
    o => o.invitationId === invitation.id && o.paymentStatus === 'SUCCEEDED'
  );

  if (!associatedOrder) {
    return res.status(403).json({
      error: 'لا يمكن عرض هذه الدعوة قبل التحقق من سداد الرسوم.',
      code: 'PAYMENT_REQUIRED'
    });
  }

  res.json({
    success: true,
    invitation: {
      publicId: invitation.publicId,
      templateId: invitation.templateId,
      templateVersion: invitation.templateVersion,
      data: invitation.data,
      qrCodeData: invitation.qrCodeData,
      status: invitation.status,
      packageName: associatedOrder.packageSnapshot?.name || 'الباقة الملكية'
    }
  });
});

/* =========================================================================
   8. CUSTOMER & ADMIN DASHBOARDS
   ========================================================================= */
app.get('/api/my-orders', (req: Request, res: Response) => {
  const userId = getCustomerUserId(req, res);
  const orders = db.getOrdersByUserId(userId);
  
  // Attach invitation records
  const enriched = orders.map(order => {
    const inv = db.getInvitationById(order.invitationId);
    return {
      ...order,
      invitation: inv ? {
        id: inv.id,
        status: inv.status,
        publicId: inv.publicId,
        qrCodeData: inv.qrCodeData,
        groomName: inv.data.groomName,
        brideName: inv.data.brideName,
        weddingDateGregorian: inv.data.weddingDateGregorian
      } : null
    };
  });

  res.json({ orders: enriched });
});

app.get('/api/admin/orders', (req: Request, res: Response) => {
  const adminSecret = req.headers['x-admin-secret'] || req.query.secret;
  if (adminSecret !== process.env.ADMIN_SECRET_KEY && process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Unauthorized: Admin secret required' });
  }

  const { orders, payments } = db.getAllOrders();
  res.json({
    totalOrders: orders.length,
    paidOrders: orders.filter(o => o.paymentStatus === 'SUCCEEDED').length,
    orders,
    payments
  });
});

/* =========================================================================
   9. HOSTED JORDAN GATEWAY TEST/SANDBOX CHECKOUT UI
   (Allows testing full payment lifecycle with JOD, Click, & Cards)
   ========================================================================= */
app.get('/gateway/hosted-checkout', (req: Request, res: Response) => {
  const { orderId, paymentId, providerPaymentId, amount, currency, customerName, returnUrl, cancelUrl } = req.query;

  res.send(`
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>بوابة الدفع الإلكتروني المعتمدة | المملكة الأردنية الهاشمية</title>
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Tajawal', sans-serif; }
        body { background: #0c1017; color: #f1f5f9; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
        .card { background: #131926; border: 1px solid #d4af3740; border-radius: 24px; width: 100%; max-width: 480px; padding: 32px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
        .header { text-align: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 20px; margin-bottom: 24px; }
        .badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; background: rgba(212,175,55,0.15); border: 1px solid rgba(212,175,55,0.3); border-radius: 999px; color: #f5e7a9; font-size: 11px; font-weight: 700; margin-bottom: 12px; }
        .title { font-size: 20px; font-weight: 800; color: #ffffff; }
        .merchant { font-size: 13px; color: #94a3b8; margin-top: 4px; }
        .amount-box { background: rgba(212,175,55,0.08); border: 1px dashed rgba(212,175,55,0.4); border-radius: 16px; padding: 18px; text-align: center; margin-bottom: 24px; }
        .amount-label { font-size: 12px; color: #cbd5e1; }
        .amount-val { font-size: 32px; font-weight: 900; color: #f5e7a9; margin-top: 2px; }
        .details-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13px; }
        .details-row span:first-child { color: #94a3b8; }
        .details-row span:last-child { font-weight: 700; color: #ffffff; }
        .methods { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 20px 0; }
        .method-btn { background: #1c2436; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 12px; text-align: center; color: #ffffff; font-size: 12px; font-weight: 700; }
        .method-btn.active { border-color: #d4af37; background: rgba(212,175,55,0.12); color: #f5e7a9; }
        .btn-pay { width: 100%; background: linear-gradient(135deg, #d4af37, #aa8010); color: #0b0e14; border: none; padding: 16px; border-radius: 14px; font-size: 16px; font-weight: 800; cursor: pointer; transition: all 0.2s; margin-top: 16px; }
        .btn-pay:hover { filter: brightness(1.1); transform: translateY(-1px); }
        .btn-cancel { display: block; text-align: center; color: #94a3b8; text-decoration: none; font-size: 13px; margin-top: 14px; }
        .security-notice { font-size: 11px; color: #64748b; text-align: center; margin-top: 18px; display: flex; align-items: center; justify-content: center; gap: 6px; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <div class="badge">🇯🇴 بوابة الدفع الآمنة • المملكة الأردنية</div>
          <h1 class="title">إتمام الدفع الإلكتروني</h1>
          <p class="merchant">التاجر: منصة «دعوتك» لدعوات الزفاف الرقمية</p>
        </div>

        <div class="amount-box">
          <div class="amount-label">المبلغ الإجمالي المستحق</div>
          <div class="amount-val">${amount} ${currency || 'JOD'}</div>
        </div>

        <div class="details-row">
          <span>رقم الطلب:</span>
          <span>${orderId}</span>
        </div>
        <div class="details-row">
          <span>اسم العميل:</span>
          <span>${customerName || 'عميل منصة دعوتك'}</span>
        </div>
        <div class="details-row">
          <span>معرّف المعاملة:</span>
          <span style="font-family: monospace; font-size: 11px;">${providerPaymentId}</span>
        </div>

        <div class="methods">
          <div class="method-btn active">💳 فيزا / ماستركارد</div>
          <div class="method-btn active">⚡ كليك (CliQ) الأردن</div>
        </div>

        <form method="POST" action="/gateway/process-payment">
          <input type="hidden" name="orderId" value="${orderId}" />
          <input type="hidden" name="paymentId" value="${paymentId}" />
          <input type="hidden" name="providerPaymentId" value="${providerPaymentId}" />
          <input type="hidden" name="amount" value="${amount}" />
          <input type="hidden" name="currency" value="${currency || 'JOD'}" />
          <input type="hidden" name="returnUrl" value="${returnUrl}" />
          <input type="hidden" name="decision" value="success" />

          <button type="submit" class="btn-pay">
            تأكيد الدفع الآن (${amount} ${currency || 'JOD'})
          </button>
        </form>

        <form method="POST" action="/gateway/process-payment" style="margin-top: 8px;">
          <input type="hidden" name="orderId" value="${orderId}" />
          <input type="hidden" name="paymentId" value="${paymentId}" />
          <input type="hidden" name="providerPaymentId" value="${providerPaymentId}" />
          <input type="hidden" name="amount" value="${amount}" />
          <input type="hidden" name="currency" value="${currency || 'JOD'}" />
          <input type="hidden" name="returnUrl" value="${returnUrl}" />
          <input type="hidden" name="decision" value="fail" />

          <button type="submit" style="width: 100%; background: transparent; border: 1px solid rgba(239,68,68,0.3); color: #ef4444; padding: 10px; border-radius: 12px; font-size: 12px; font-weight: 700; cursor: pointer;">
            محاكاة فشل المعاملة (اختبار الرفض)
          </button>
        </form>

        <a href="${cancelUrl || '/'}" class="btn-cancel">إلغاء والعودة لصفحة الطلب</a>

        <div class="security-notice">
          🔒 معالجة مشفّرة بتقنية SSL 256-bit وفق معايير البنك المركزي الأردني
        </div>
      </div>
    </body>
    </html>
  `);
});

app.post('/gateway/process-payment', async (req: Request, res: Response) => {
  const { orderId, paymentId, providerPaymentId, amount, currency, returnUrl, decision } = req.body;
  const isSuccess = decision === 'success';

  // Trigger internal server webhook
  try {
    const webhookPayload = {
      event: isSuccess ? 'payment.succeeded' : 'payment.failed',
      order_id: orderId,
      payment_id: providerPaymentId,
      amount: parseFloat(amount || '0'),
      currency: currency || 'JOD',
      status: isSuccess ? 'SUCCEEDED' : 'FAILED',
      event_id: `evt_${providerPaymentId}_${decision}`
    };

    const baseUrl = getBaseUrl(req);
    await fetch(`${baseUrl}/api/payments/webhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-gateway-signature': 'test_sandbox_signature'
      },
      body: JSON.stringify(webhookPayload)
    });
  } catch (err) {
    console.error('[Gateway Test] Failed to trigger internal webhook:', err);
  }

  // Redirect to success / return url
  const redirectTarget = returnUrl || `/payment/success?orderId=${orderId}&paymentId=${paymentId}`;
  res.redirect(redirectTarget);
});

/* =========================================================================
   10. VITE MIDDLEWARE (Dev) / STATIC FILES (Production)
   ========================================================================= */
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Da3wtak Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

# GEMINI_API_KEY: Required for Gemini AI API calls.
# AI Studio automatically injects this at runtime from user secrets.
# Users configure this via the Secrets panel in the AI Studio UI.
GEMINI_API_KEY="MY_GEMINI_API_KEY"

# APP_URL: The URL where this applet is hosted.
# AI Studio automatically injects this at runtime with the Cloud Run service URL.
# Used for self-referential links, OAuth callbacks, and API endpoints.
APP_URL="MY_APP_URL"
