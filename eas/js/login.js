(function($, owner) {
	/**
	 * 获取当前状态
	 **/
	owner.getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setState = function(state) {
		state = state || {};
		localStorage.setItem('$state', JSON.stringify(state));
	};
	/*用户登录*/
	owner.login = function(loginInfo) {
		loginInfo = loginInfo || {};
		loginInfo.password = loginInfo.password || '';
		if (loginInfo.loginName == '') {
			plus.nativeUI.toast('请输入您的账号')
			return false;
		}
		if (loginInfo.password == '') {
			plus.nativeUI.toast('请输入您的密码')
			return false;
		}
		return true;
		/*var users = JSON.parse(localStorage.getItem('$users') || '[]');*/
	};
}(mui, window.app = {}))
