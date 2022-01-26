/*
 *                    ....
 *                  .:   '':.
 *                  ::::     ':..
 *                  ::.         ''..
 *       .:'.. ..':.:::'    . :.   '':.
 *      :.   ''     ''     '. ::::.. ..:
 *      ::::.        ..':.. .''':::::  .
 *      :::::::..    '..::::  :. ::::  :
 *      ::'':::::::.    ':::.'':.::::  :
 *      :..   ''::::::....':     ''::  :
 *      :::::.    ':::::   :     .. '' .
 *   .''::::::::... ':::.''   ..''  :.''''.
 *   :..:::'':::::  :::::...:''        :..:
 *   ::::::. '::::  ::::::::  ..::        .
 *   ::::::::.::::  ::::::::  :'':.::   .''
 *   ::: '::::::::.' '':::::  :.' '':  :
 *   :::   :::::::::..' ::::  ::...'   .
 *   :::  .::::::::::   ::::  ::::  .:'
 *    '::'  '':::::::   ::::  : ::  :
 *              '::::   ::::  :''  .:
 *               ::::   ::::    ..''
 *               :::: ..:::: .:''
 *                 ''''  '''''
 *
 *
 * AUTOMAD
 *
 * Copyright (c) 2021 by Marc Anton Dahmen
 * https://marcdahmen.de
 *
 * Licensed under the MIT license.
 */

import { Partials } from '../../types';
import { BaseLayoutComponent } from './BaseLayout';
import layout from './Templates/SidebarLayout.html';

/**
 * The Automad base component. All Automad components are based on this class.
 *
 * @extends BaseLayoutComponent
 */
export abstract class SidebarLayoutComponent extends BaseLayoutComponent {
	/**
	 * The template for the view.
	 */
	protected template: string = layout;

	/**
	 * An array of partials that must be provided in order to render partial references.
	 */
	protected partials: Partials = {
		main: this.renderMainPartial,
		save: this.renderSaveButtonPartial,
	};

	/**
	 * Render the main partial.
	 *
	 * @returns the rendered HTML
	 */
	protected renderMainPartial(): string {
		return '';
	}

	/**
	 * Render the save button partial.
	 *
	 * @returns the rendered HTML
	 */
	protected renderSaveButtonPartial(): string {
		return '';
	}
}
