
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<link rel=\"icon\" href=\"../assets/SPAT_Logo_zondertekst.png\" />\n\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t<meta name=\"description\" content=\"Spatwater\">\n\n\n\t<title>SPATwater</title>\n\n\t" + head + "\n\n\t<!--=============== REMIXICONS ===============-->\n\t<link href=\"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css\" rel=\"stylesheet\">\n\t<link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css\" rel=\"stylesheet\">\n\n\n\t<!--=============== GOOGLE ICONS ===============-->\n\t<link rel=\"stylesheet\"\n\t\thref=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\" />\n\n\t<!--=============== SWIPER CSS ===============-->\n\t<link rel=\"stylesheet\" href=\"/assets/swiper-bundle.min.css\">\n\n\t<!--=============== SWIPER JS ===============-->\n\t<script src=\"/assets/swiper-bundle.min.js\"></script>\n\t\n\n\t<!--=============== LEAFLET JS ===============-->\n\t<link rel=\"stylesheet\" href=\"https://unpkg.com/leaflet@1.9.2/dist/leaflet.css\"\n\t\tintegrity=\"sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=\" crossorigin=\"\" />\n\t<script src=\"https://unpkg.com/leaflet@1.9.2/dist/leaflet.js\"\n\t\tintegrity=\"sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg=\" crossorigin=\"\"></script>\n\n</head>\n\n<body data-sveltekit-preload-data=\"hover\">\n\t<div style=\"display: contents\">" + body + "</div>\n\n</body>\n\n</html>\n\n<style>\n\n\t@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap');\n\n\t* {\n\t\tbox-sizing: border-box;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tscroll-behavior: smooth;\n\t\tfont-family: \"Open sans\", sans-serif;\n\t}\n\n\t:root {\n\t\t--spat: #7faec5;\n\t\t--lg-bg: #fafafa;\n\t\t--green: #4ecd5d;\n\t\t--darkblue: #384b61;\n\t}\n\n\t@media screen and (prefers-contrast: more) {\n\t\t:root {\n\t\t\t--spat: #384b61;\n\t\t\t--green: #384b61;\n\t\t}\n\t}\n\n\tp {\n\t\tmargin-bottom: 1rem;\n\t\tcolor: var(--darkblue);\n\t\tfont-size: 0.8rem;\n\n\t}\n\n\thtml {\n\t\tscroll-behavior: smooth;\n\t}\n\n\tbody {\n\t\tfont-family: \"Poppins\", serif;\n\t}\n\n\tmain {\n\t\toverflow-x: hidden;\n\t\toverflow-y: hidden;\n\t}\n\n\t.button {\n\t\tdisplay: inline-block;\n\t\tbackground-color: var(--green);\n\t\tcolor: white;\n\t\tpadding: 0.5rem 1rem;\n\t\tborder-radius: 5px;\n\t\tfont-weight: var(--font-semi-bold);\n\t\ttransition: 0.3s;\n\t\ttext-decoration: none;\n\t\tz-index: 1;\n\t}\n\n\t.button:hover {\n\t\tbackground-color: var(--darkblue);\n\t}\n\n\t.leaflet-control {\n\t\tdisplay: none !important;\n\t}\n\n\n</style>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1o3rxma"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
