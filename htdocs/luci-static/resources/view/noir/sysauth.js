'use strict';
'require ui';
'require view';

return view.extend({
	render: function () {
		var form = document.querySelector('form');

		var dlg = ui.showModal(
			null,
			[].slice.call(document.querySelectorAll('section > *')),
			'login'
		);
		var removeAlert = function () {
			var alertMsg = dlg.querySelector('.alert-message');
			if (alertMsg !== null) {
				alertMsg.remove();
			}
		}

		form.addEventListener('keypress', function (ev) {
			if (ev.key == 'Enter') {
				removeAlert();
				dlg.appendChild(E('div', { 'class': 'spinning' }, _('Logging in…')));
				form.submit()
			}
		});

		dlg.querySelectorAll('input').forEach(function (el) {
			el.addEventListener('focus', function () {
				removeAlert();
			});
		});

		if (dlg.querySelector('.alert-message') === null) {
			document.querySelector('input[type="password"]').focus();
		}

		return '';
	},

	addFooter: function () { }
});
