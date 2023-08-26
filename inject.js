/** @format */

console.log('%cYt-NS', 'color:white;background-color:lime', 'Injecting javascript...')

const injected_js_name = 'yt-no-shorts.js'

!(function () {
	const e = document.querySelectorAll(`script[src="chrome-extension://${chrome.runtime.id}/${injected_js_name}"]`)
	for (const t of e) t.remove()
})(),
	(function (e, t) {
		try {
			const o = document.querySelector(t),
				i = document.createElement('script')
			i.setAttribute('type', 'text/javascript'),
				i.setAttribute('src', e),
				i.setAttribute('defer', 'true'),
				null == o || o.appendChild(i)
		} catch (e) {
			throw e
		}
	})(chrome.runtime.getURL(injected_js_name), 'body')
