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
 * Copyright (c) 2022-2023 by Marc Anton Dahmen
 * https://marcdahmen.de
 *
 * Licensed under the MIT license.
 */

import { Section } from '@/components/Switcher/Switcher';

type Enabled = boolean | 0 | 1;

export interface SystemSectionData {
	section: Section;
	icon: string;
	title: string;
	info: string;
	state: string;
	render: () => void;
	narrowIcon?: boolean;
}

interface CacheSettings {
	enabled: Enabled;
	lifetime: number;
	monitorDelay: number;
}

interface FeedSettings {
	enabled: Enabled;
	fields: string;
}

interface UserSettings {
	name: string;
	email: string;
}

export interface SystemSettings {
	cache: CacheSettings;
	debug: Enabled;
	feed: FeedSettings;
	i18n: Enabled;
	translation: string;
	users: UserSettings[];
	tempDirectory: string;
}

export interface SystemUpdateResponse {
	state: string;
	current: string;
	latest: string;
	items: string[];
}

export interface User {
	name: string;
	email: string;
}
