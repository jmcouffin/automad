/*
 *	                  ....
 *	                .:   '':.
 *	                ::::     ':..
 *	                ::.         ''..
 *	     .:'.. ..':.:::'    . :.   '':.
 *	    :.   ''     ''     '. ::::.. ..:
 *	    ::::.        ..':.. .''':::::  .
 *	    :::::::..    '..::::  :. ::::  :
 *	    ::'':::::::.    ':::.'':.::::  :
 *	    :..   ''::::::....':     ''::  :
 *	    :::::.    ':::::   :     .. '' .
 *	 .''::::::::... ':::.''   ..''  :.''''.
 *	 :..:::'':::::  :::::...:''        :..:
 *	 ::::::. '::::  ::::::::  ..::        .
 *	 ::::::::.::::  ::::::::  :'':.::   .''
 *	 ::: '::::::::.' '':::::  :.' '':  :
 *	 :::   :::::::::..' ::::  ::...'   .
 *	 :::  .::::::::::   ::::  ::::  .:'
 *	  '::'  '':::::::   ::::  : ::  :
 *	            '::::   ::::  :''  .:
 *	             ::::   ::::    ..''
 *	             :::: ..:::: .:''
 *	               ''''  '''''
 *
 *
 *	AUTOMAD
 *
 *	Copyright (c) 2020 by Marc Anton Dahmen
 *	http://marcdahmen.de
 *
 *	Licensed under the MIT license.
 *	http://automad.org/license
 */


class AutomadMail {

	constructor({data}) {

		var create = Automad.util.create;

		this.data = {
			to: data.to || '',
			error: data.error || 'Please fill out all fields!',
			success: data.success || 'Successfully sent email!',
			buttonClass: data.buttonClass || '',
			formClass: data.formClass || '',
			inputClass: data.inputClass || '',
			placeholderEmail: data.placeholderEmail || 'Your email adress',
			placeholderSubject: data.placeholderSubject || 'Subject',
			placeholderMessage: data.placeholderMessage || 'Message'
		};

		this.inputs = {
			to: create.editable(['cdx-input'], 'Enter your email adress here', this.data.to),
			error: create.editable(['cdx-input'], 'Enter an optional error message here', this.data.error),
			success: create.editable(['cdx-input'], 'Enter an optional success message here', this.data.success),
			buttonClass: create.editable(['cdx-input'], '', this.data.buttonClass),
			formClass: create.editable(['cdx-input'], '', this.data.formClass),
			inputClass: create.editable(['cdx-input'], '', this.data.inputClass),
			placeholderEmail: create.editable(['cdx-input'], '', this.data.placeholderEmail),
			placeholderSubject: create.editable(['cdx-input'], '', this.data.placeholderSubject),
			placeholderMessage: create.editable(['cdx-input'], '', this.data.placeholderMessage)
		};

		var icon = document.createElement('div');

		icon.innerHTML = AutomadMail.toolbox.icon;
		icon.classList.add('am-block-icon');
		
		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('uk-panel', 'uk-panel-box');
		this.wrapper.appendChild(icon);
		this.wrapper.appendChild(create.label('Your Email Adress'));
		this.wrapper.appendChild(this.inputs.to);
		this.wrapper.appendChild(create.label('Success Message'));
		this.wrapper.appendChild(this.inputs.success);
		this.wrapper.appendChild(create.label('Error message'));
		this.wrapper.appendChild(this.inputs.error);
		this.wrapper.appendChild(create.label('Placeholder Email'));
		this.wrapper.appendChild(this.inputs.placeholderEmail);
		this.wrapper.appendChild(create.label('Placeholder Subject'));
		this.wrapper.appendChild(this.inputs.placeholderSubject);
		this.wrapper.appendChild(create.label('Placeholder Message'));
		this.wrapper.appendChild(this.inputs.placeholderMessage);
		this.wrapper.appendChild(create.label('Custom Form Class'));
		this.wrapper.appendChild(this.inputs.formClass);
		this.wrapper.appendChild(create.label('Custom Input Field Class'));
		this.wrapper.appendChild(this.inputs.inputClass);
		this.wrapper.appendChild(create.label('Custom Button Class'));
		this.wrapper.appendChild(this.inputs.buttonClass);

	}

	static get toolbox() {

		return {
			title: 'Mail Form',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="15px" viewBox="0 0 18 15"><path d="M14,0H4C1.791,0,0,1.791,0,4v7c0,2.209,1.791,4,4,4h10c2.209,0,4-1.791,4-4V4C18,1.791,16.209,0,14,0z M14,2 c0.153,0,0.302,0.021,0.445,0.054L9,7.5L3.554,2.054C3.698,2.021,3.846,2,4,2H14z M16,11c0,1.103-0.897,2-2,2H4 c-1.103,0-2-0.897-2-2V4c0-0.154,0.021-0.302,0.054-0.446L8.25,9.75C8.457,9.957,8.729,10.061,9,10.061S9.543,9.957,9.75,9.75 l6.195-6.196C15.979,3.698,16,3.846,16,4V11z"/></svg>'
		};

	}

	render() {

		return this.wrapper;

	}

	save() {

		return {
			to: this.inputs.to.innerHTML,
			error: this.inputs.error.innerHTML,
			success: this.inputs.success.innerHTML,
			buttonClass: this.inputs.buttonClass.innerHTML,
			formClass: this.inputs.formClass.innerHTML,
			inputClass: this.inputs.inputClass.innerHTML,
			placeholderEmail: this.inputs.placeholderEmail.innerHTML,
			placeholderSubject: this.inputs.placeholderSubject.innerHTML,
			placeholderMessage: this.inputs.placeholderMessage.innerHTML
		};

	}

}