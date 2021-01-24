(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/00-ABOUT.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(n("../../node_modules/react/index.js"),n("../../node_modules/@mdx-js/react/dist/esm.js")),a={};function i(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},a,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("img",{alt:"Logo",src:n("./docs/imgs/header.png")})),Object(s.b)("h1",{id:"jasonapi"},"JasonAPI"),Object(s.b)("p",null,"Consume and manipulate ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"http://jsonapi.org/"}),"JSON API standard"),"\ndata in Redux with scary ease."),Object(s.b)("h2",{id:"a-basic-but-powerful-example"},"A Basic (But Powerful) Example"),Object(s.b)("p",null,"Below is a simple example. Hopefully, it should demonstrate how the individual\npieces play together. With just a little bit of code, you get JSON API-compliant\napi calls, caching, loading status management, error-handling, and efficient\nReact renders."),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import * as React from 'react';\nimport { jasonApiRequest, useAutoRequest, useItem } from 'jason-api';\nimport { ResourceObject } from 'ts-json-api';\n\nexport interface ArticleResource extends ResourceObject {\n    type: 'articles';\n    attributes: {\n        title: string;\n        body: string;\n    };\n}\n\nconst fetchArticles = () =>\n    jasonApiRequest<ArticleResource[]>({\n        url: '/api/articles',\n    });\n\n// This component will automatically initiate a\n// request to get a list of an Articles on mount.\nexport const ArticlesList = () => {\n    const [request, refetch] = useAutoRequest({\n        action: fetchArticles(),\n    });\n\n    switch (request.state) {\n        case 'loading':\n            return <YourLoadingComponent />;\n\n        case 'error':\n            return <YourErrorsComponent errors={request.error} />;\n\n        case 'success':\n            return (\n                <div>\n                    <h1>Articles</h1>\n                    {request.response.data.map(article => (\n                        <Article id={article.id} />\n                    ))}\n                </div>\n            );\n\n        default:\n            return null;\n    }\n};\n\ninterface ArticleProps {\n    id: string;\n}\n\n// This component will grab available Article data from the reduce store.\nconst Article: React.FunctionComponent<ArticleProps> = ({ id }) => {\n    const article = useItem<ArticleResource>('articles', id);\n\n    if (!article) {\n        return null;\n    }\n\n    return (\n        <div>\n            <h2>{article.attributes.title}</h2>\n            <p>{article.attributes.body}</p>\n        </div>\n    );\n};\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/00-ABOUT.mdx"}}),i.isMDXComponent=!0},"./docs/imgs/header.png":function(e,t,n){e.exports=n.p+"static/img/header.68fdb05f.png"}}]);
//# sourceMappingURL=docs-00-about.bb1aadc7d746719f30d0.js.map