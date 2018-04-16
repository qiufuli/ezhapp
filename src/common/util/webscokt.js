import store from '../../store'
export function init() {
	let ws=null
	const wsuri = "ws://192.168.9.57:8083/socket/socketServer?userid=" + store.state.name;
	if('WebSocket' in window) {
		ws = new WebSocket(wsuri);
	} else if('MozWebSocket' in window) {
		ws = new MozWebSocket(wsuri)
	} else {
		ws = new SockJS("http://192.168.9.57:8083/socket/imserver");
	}
	ws.onmessage = ws.websocketonmessage;
	ws.onclose = ws.websocketclose;
	return ws;
}