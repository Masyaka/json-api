(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/50-ACTIONS.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("../../node_modules/react/index.js"),n("../../node_modules/@mdx-js/react/dist/esm.js")),s={};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"actions"},"Actions"),Object(o.b)("p",null,"While JasonAPI shines when it can manage locally-stored data itself, sometimes you'll need to\nupdate it yourself. Below are a handful of action creators that will allow you to do just that."),Object(o.b)("h2",{id:"consuming-json-data"},"Consuming JSON data"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { loadJsonApiResourceObjectData } from 'jason-api';\n\ndispatch(\n    loadJsonApiResourceObjectData(jsonApiResponseFromServer)\n);\n")),Object(o.b)("h2",{id:"manipulating-resource-objects"},"Manipulating resource objects"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import {\n    addRelationshipToResourceObject,\n    removeRelationshipFromResourceObject,\n    updateResourceObject,\n} from 'jason-api';\n\n/**\n * Example: \n *\n * dispatch(updateResourceObject('article', articleId, {\n *     isUserFavorite: true\n * }));\n */\ndispatch(\n    updateResourceObject(resourceObjectKey, resourceObjectId, dataObject)\n);\n\n/**\n * Example:\n *\n * dispatch(addRelationshipToResourceObject('article', '54321', 'readers', {\n *     type: 'user',\n *     id: '12345',\n *     attributes: { name: \"Bob Ross\" }\n * }));\n */\ndispatch(\n    addRelationshipToResourceObject(\n        resourceObjectKey,\n        resourceObjectId,\n        relationshipKey,\n        relationshipJsonApiObject\n    )\n);\n\n/**\n * Example:\n *\n * You can also add relationships by ID.\n * dispatch(addRelationshipToResourceObject(\n *     'article', '54321', 'readers', '12345'\n * ));\n */\ndispatch(\n    addRelationshipToResourceObject(\n        resourceObjectKey,\n        resourceObjectId,\n        relationshipKey,\n        relationshipJsonApiObject\n    )\n);\n\n/**\n * Example:\n *\n * dispatch(removeRelationshipFromResourceObject(\n *     'article', '54321', 'readers', '12345'\n * ));\n */\ndispatch(\n    removeRelationshipFromResourceObject(\n        resourceObjectKey,\n        resourceObjectId,\n        relationshipKey,\n        relationshipId\n    );\n    ``\n);\n")),Object(o.b)("h2",{id:"removing-resource-objects-from-the-store"},"Removing resource objects from the store"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { removeResourceObject, clearResourceObjectType } from 'jason-api';\n\n// Remove a single resource object\ndispatch(\n    removeResourceObject('articles', '1')\n);\n\n// Remove all resource objects from an resource object type\ndispatch(\n    clearResourceObjectType('articles')\n);\n")),Object(o.b)("h2",{id:"metadata"},"Metadata"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { updateResourceObjectsMeta, updateResourceObjectMeta } from 'jason-api';\n\n// Set a metadata value for a resource object type\ndispatch(\n    updateResourceObjectsMeta('articles', 'isLoading', true)\n);\n\n// Set a metadata value for a specific resource object\ndispatch(\n    updateResourceObjectMeta('articles', '123', 'isLoading', true)\n);\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/50-ACTIONS.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-50-actions.43f6e5fd37a8e5caffd7.js.map