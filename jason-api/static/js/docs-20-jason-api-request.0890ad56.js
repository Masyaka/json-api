(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/20-JASON-API-REQUEST.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));var s=t("../../node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(t("../../node_modules/react/index.js"),t("../../node_modules/@mdx-js/react/dist/esm.js")),i={};function a(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"talking-to-an-api"},"Talking to an API"),Object(o.b)("p",null,"Below is a couple simple examples of action creators. The only required\nattributes is ",Object(o.b)("inlineCode",{parentName:"p"},"url"),".  This will make a request to the given URL, normalize\nthe response, and update the store. Additionally, since we set the ",Object(o.b)("inlineCode",{parentName:"p"},"resourceType"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"resourceId"),", the meta data for that particular entity will be updated to\nreflect ",Object(o.b)("inlineCode",{parentName:"p"},"isLoading")," and ",Object(o.b)("inlineCode",{parentName:"p"},"error")," status."),Object(o.b)("p",null,"JasonAPI action creators also play nice with our Higher Order Components,\nenabling intelligent caching, error-handling, and much more. There's plenty\nof additional, helpful options; so be sure to check the WIKI."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { jasonApiRequest } from 'jason-api';\n\nconst getUser = userId => jasonApiRequest({\n    url: `/api/users/${userId}`,\n    resourceType: 'users',\n    resourceId: userId,\n});\n\n/**\n * NOTE: Since our payload contains the `type` and `id`, we can\n * choose to skip including those options like we did above.\n */\nconst updateUser = (userId, attributes) => jasonApiRequest({\n    url: `/api/users/${userId}`,\n    method: 'post',\n    payload: {\n        data: {\n            type: 'users',\n            id: userId,\n            attributes,\n        }\n    },\n});\n\n// JASON_API_REQUEST action creators return a Promise when dispatched.\ndispatch(getUser('12345')).then(response =>\n    console.log(response.data.attributes.firstName)\n);\n\n// Or Use Await if that's your thing\nconst result = await dispatch(updateUser('12345', { firstName: 'Enrique' }));\nconsole.log(result);\n")),Object(o.b)("h2",{id:"jasonapirequest-options"},"jasonApiRequest() Options"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"jasonApiRequest()")," action creator triggers an api call. A basic get request only requires a url."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { jasonApiRequest } from 'jason-api';\n\nconst fetchBook = id => jasonApiRequest({\n    url: `/api/books/${id}`,\n});\n")),Object(o.b)("p",null,"There are plenty of other options, however, for customizing your requests with minimal code."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"{\n    // Defaults to 'get'\n    method: 'get'|'post'|'patch'|'delete',\n\n    // API route to hit\n    url: <STRING>,\n\n    // Optional payload to json-encode and pass along\n    payload: <OBJECT>,\n\n    // Additional headers to send along with the network request\n    additionalHeaders: <OBJECT>,\n\n    // If included without entityId, `loading` & `error` meta data is set for this entity type\n    entityType: <STRING>,\n\n    // If included with entityType, `loading` & `error` meta data is set for this specific entity\n    entityId: <STRING>,\n\n    // Optional function to call on success\n    onSuccess: (response, { state, dispatch }) => void,\n\n    // Do not dispatch the startLoadingActionCreator, if one was set using the `jsonApiMiddlewareFactory`\n    disableStartLoadingActionCreator: <BOOLEAN>,\n\n    // Optional function or response-code mapped object of functions to call on error.\n    onError: (response, { state, dispatch }) => void,\n\n    // If set to true, `displayErrorActionCreator` that was set using the\n    // `jsonApiMiddlewareFactory` will be dispatched in the event of an error.\n    displayNotificationOnError: <BOOLEAN>,\n\n    // Set a relationship or relationships on success. Accepts an ID or\n    // Array of ID's. If relationshipId is not provided, it will use the\n    // JSON response. Will completely replace existing relationship(s).\n    setRelationshipOnSuccess: [entityType, entityId, relationshipType, relationshipId],\n\n    // Add a relationship on success. Ideal for one-to-many/many-to-many\n    // relationships. If relationshipId is not provided, it will use the\n    // JSON response. New relationships are appended to existing ones.\n    addRelationshipOnSuccess: [entityType, entityId, relationshipType, relationshipId],\n\n    // Remove a relationship on success. Ideal for one-to-many relationships.\n    removeRelationshipOnSuccess: [entityType, entityId, relationshipType, relationshipId],\n\n    // Remove an entity from the store on success\n    removeEntityOnSuccess: [entityType, entityId],\n\n    // Update an entity on success. Note that any\n    // JSON API response will automatically be applied.\n    updateEntityOnSuccess: [entityType, entityId, payload],\n\n    // Optional function to transform incoming server\n    // response before it is processed by the middleware.\n    // It should return a valid JSON API response.\n    transformer: <FUNCTION>\n}\n")))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/20-JASON-API-REQUEST.mdx"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-20-jason-api-request.43f6e5fd37a8e5caffd7.js.map