/** @format */

/* 
chrome.action.onClicked.addListener(async (_tab) => {
	chrome.scripting.executeScript({
		target: { tabId: _tab.id },
		files: ['download.js'],
	})
})
*/

/* 
	_tab ==>
{
    "active": true,
    "audible": false,
    "autoDiscardable": true,
    "discarded": false,
    "favIconUrl": "https://www.youtube.com/s/desktop/bcc5b1af/img/favicon_32x32.png",
    "groupId": -1,
    "height": 626,
    "highlighted": true,
    "id": 1727919465,
    "incognito": false,
    "index": 0,
    "mutedInfo": {
        "muted": false
    },
    "pinned": false,
    "selected": true,
    "status": "complete",
    "title": "YouTube",
    "url": "https://www.youtube.com/",
    "width": 1366,
    "windowId": 1727917880
} */

function removeShortsTab() {
	/* var _main_loop = setInterval(_annon_func, 1000)

	var _annon_func = () => {
		console.log('%cYoutube-No-Shorts Script executed!', 'color:white;background-color:crimson;font-size:larger')
		var yt_left_tab = document.getElementById('sections')?.children[0]?.querySelector('#items')
		if (yt_left_tab.length == 3) {
			yt_left_tab.children[1].remove()
			clearInterval(_main_loop)
		}
	} */
	var _main_loop = setInterval(function () {
		var yt_left_tab = document.getElementById('sections')?.children[0]?.querySelector('#items')
		// console.log(this)
		if (yt_left_tab !== undefined && yt_left_tab.children.length == 4) {
			yt_left_tab.children[1].remove()
			console.log('%cYoutube-No-Shorts Script executed!', 'color:white;background-color:crimson;font-size:larger')
			clearInterval(_main_loop)
		}
	}, 1000)
}

function removeShortsVideos() {
	setInterval(function () {
		document.querySelectorAll('ytd-grid-renderer').forEach((_v, _k) => {
			console.log(_v['items'])
		})
	}, 3000)
}

function removeAll() {
	var _main_loop = setInterval(function () {
		var yt_left_tab = document.getElementById('sections')?.children[0]?.querySelector('#items')
		// console.log(this)
		if (yt_left_tab !== undefined && yt_left_tab?.children.length == 4) {
			yt_left_tab.children[1].remove()
			console.log('%cYoutube-No-Shorts Script executed!', 'color:white;background-color:crimson;font-size:larger')
			clearInterval(_main_loop)
		}
	}, 1000)

	var _sec_loop = setInterval(function () {
		document.querySelectorAll('ytd-reel-shelf-renderer').forEach((_v, _k)=>{_v.remove()})
		// document.querySelectorAll('ytd-grid-renderer').forEach((_v, _k) => {
		/*document.querySelectorAll('ytd-rich-item-renderer').forEach((_v, _k) => {
			var _urls = []
			// _v.querySelectorAll('ytd-grid-video-renderer').forEach((_video, _elementID) => {
			_v.querySelectorAll('ytd-thumbnail').forEach((_video, _elementID) => {
				var _current_element = _video.querySelector('a#thumbnail')
				console.log(_current_element)
				var _current_url = _current_element.href.includes('&t=')
					? _current_element.href.substring(0, _current_element.href.indexOf('&t='))
					: _current_element.href

				if (_current_url.includes('/shorts/')) {
					_video.remove()
				} else {
					if (_current_element.href.includes('&t=')) _current_element.href = _current_url

					_urls.push(_current_url)
				}
			})
			// console.log(_urls)
		})*/
		
		document.querySelectorAll('ytd-rich-item-renderer').forEach((_v,_k)=>{ 
			// var _video_element = _v.$.content.children[0].$.dismissible.children[0].$.thumbnail.href 
			if (_v.$?.content !== undefined) {
				if (_v.$.content.children[0].$?.dismissible !== undefined) {
					var _video_link = _v.$.content.children[0].$.dismissible.children[0].$.thumbnail.href
					if (_video_link.includes("/shorts/")) {
						_v.remove()
					}
				}
			}
		})
	}, 1000)
}

/*
chrome.tabs.onUpdated.addListener((_tabId, _changeInfo, _tab) => {
	if (_changeInfo?.status == 'complete') {
		console.log(
			`%c${_tab.title} -> Tab changed! ${_tab.url}`,
			`color:white;background-color: ${_tab.status === 'loaded' ? (_tab.active ? 'lime' : 'orange') : 'crimson'}`
		)
		// console.log(_tabId, _changeInfo, _tab)
		if (_tab.url == 'https://www.youtube.com/') {
			chrome.scripting.executeScript(
				{
					target: { tabId: _tabId },
					// files: ['yt-no-shorts.js'],
					func: removeShortsTab,
				},
				() => {}
			)
		}
		if (_tab.url == 'https://www.youtube.com/feed/subscriptions') {
			chrome.scripting.executeScript(
				{
					target: { tabId: _tabId },
					// files: ['yt-no-shorts.js'],
					func: removeAll,
				},
				() => {}
			)
		}
	}
})
 */