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
 * Copyright (c) 2021-2023 by Marc Anton Dahmen
 * https://marcdahmen.de
 *
 * Licensed under the MIT license.
 */

import {
	App,
	Attr,
	CSS,
	getPageURL,
	getTagFromRoute,
	html,
	Route,
} from '@/core';
import { HistoryModalFormComponent } from '@/components/Forms/HistoryModalForm';
import { Section } from '@/components/Switcher/Switcher';
import { BaseDashboardLayoutComponent } from './BaseDashboardLayout';
import { renderFileImportModal } from './Partials/FileImportModal';

const renderBreadcrumbs = (): string => {
	return html`
		<section class="${CSS.layoutDashboardSection}">
			<div class="${CSS.layoutDashboardContent}">
				<am-breadcrumbs-page></am-breadcrumbs-page>
			</div>
		</section>
	`;
};

const renderHistoryModal = (): string => {
	if (getPageURL() === '/') {
		return '';
	}

	return html`<am-history-modal-form></am-history-modal-form>`;
};

const renderMovePageModal = (): string => {
	if (getPageURL() === '/') {
		return '';
	}

	return html`
		<am-modal id="am-move-page-modal">
			<div class="${CSS.modalDialog}">
				<am-form ${Attr.api}="Page/move">
					<div class="${CSS.modalHeader}">
						<span>${App.text('movePage')}</span>
						<am-modal-close
							class="${CSS.modalClose}"
						></am-modal-close>
					</div>
					<div class="${CSS.modalBody}">
						<div class="${CSS.field}">
							<label class="${CSS.fieldLabel}">
								${App.text('selectTargetMovePage')}
							</label>
							<am-page-select-tree
								${Attr.hideCurrent}
							></am-page-select-tree>
						</div>
					</div>
					<div class="${CSS.modalFooter}">
						<am-modal-close
							class="${CSS.button} ${CSS.buttonPrimary}"
						>
							${App.text('cancel')}
						</am-modal-close>
						<am-submit class="${CSS.button} ${CSS.buttonAccent}">
							${App.text('movePage')}
						</am-submit>
					</div>
				</am-form>
			</div>
		</am-modal>
	`;
};

const renderDropdown = (): string => {
	if (getPageURL() === '/') {
		return '';
	}

	return html`
		<am-dropdown ${Attr.right}>
			<span class="${CSS.menuItem}">
				<span class="${CSS.displaySmallNone}">${App.text('more')}</span>
				<span
					class="${CSS.displaySmallNone} ${CSS.dropdownArrow}"
				></span>
				<span
					class="${CSS.displaySmall} ${CSS.button} ${CSS.buttonIcon}"
				>
					<i class="bi bi-three-dots-vertical"></i>
				</span>
			</span>
			<div class="${CSS.dropdownItems}">
				<am-modal-toggle
					class="${CSS.dropdownLink}"
					${Attr.modal}="#${HistoryModalFormComponent.MODAL_ID}"
				>
					<am-icon-text
						${Attr.icon}="clock-history"
						${Attr.text}="${App.text('pageHistory')}"
					></am-icon-text>
				</am-modal-toggle>
				<span class="${CSS.dropdownDivider}"></span>
				<a
					${Attr.bind}="pageUrlWithBase"
					${Attr.bindTo}="href"
					class="${CSS.dropdownLink}"
					target="_blank"
				>
					<am-icon-text
						${Attr.icon}="pencil"
						${Attr.text}="${App.text('inPageEdit')}"
					></am-icon-text>
				</a>
				<am-form ${Attr.api}="Page/duplicate">
					<am-submit class="${CSS.dropdownLink}">
						<am-icon-text
							${Attr.icon}="files"
							${Attr.text}="${App.text('duplicatePage')}"
						></am-icon-text>
					</am-submit>
				</am-form>
				<am-modal-toggle
					class="${CSS.dropdownLink}"
					${Attr.modal}="#am-move-page-modal"
				>
					<am-icon-text
						${Attr.icon}="arrows-move"
						${Attr.text}="${App.text('movePage')}"
					></am-icon-text>
				</am-modal-toggle>
				<am-copy
					class="${CSS.dropdownLink} ${CSS.dropdownDivider}"
					value="${getPageURL()}"
				>
					<am-icon-text
						${Attr.icon}="clipboard-plus"
						${Attr.text}="${App.text('copyUrlClipboard')}"
					></am-icon-text>
				</am-copy>
				<am-form
					${Attr.api}="Page/delete"
					${Attr.confirm}="${App.text('confirmDeletePage')}"
				>
					<am-submit class="${CSS.dropdownLink}">
						<am-icon-text
							${Attr.icon}="trash3"
							${Attr.text}="${App.text('deletePage')}"
						></am-icon-text>
					</am-submit>
				</am-form>
			</div>
		</am-dropdown>
	`;
};

const renderMenu = (): string => {
	return html`
		<section
			class="${CSS.layoutDashboardSection} ${CSS.layoutDashboardSectionSticky}"
		>
			<div
				class="${CSS.layoutDashboardContent} ${CSS.layoutDashboardContentRow}"
			>
				<am-switcher>
					<div class="${CSS.menu} ${CSS.displaySmallNone}">
						<am-switcher-link
							class="${CSS.menuItem}"
							${Attr.section}="${Section.settings}"
						>
							${App.text('fieldsSettings')}
						</am-switcher-link>
						<am-switcher-link
							class="${CSS.menuItem}"
							${Attr.section}="${Section.text}"
						>
							${App.text('fieldsContent')}
						</am-switcher-link>
						<am-switcher-link
							class="${CSS.menuItem}"
							${Attr.section}="${Section.colors}"
						>
							${App.text('fieldsColors')}
						</am-switcher-link>
						<am-switcher-link
							class="${CSS.menuItem}"
							${Attr.section}="${Section.files}"
						>
							${App.text('uploadedFiles')}
							<span class="${CSS.badge}">
								<am-file-count></am-file-count>
							</span>
						</am-switcher-link>
					</div>
					<am-dropdown
						class="${CSS.displaySmall} ${CSS.button} ${CSS.buttonPrimary}"
					>
						<span class="${CSS.iconText}">
							<am-switcher-label></am-switcher-label>
							<span class="${CSS.dropdownArrow}"></span>
						</span>
						<div class="${CSS.dropdownItems}">
							<am-switcher-link
								class="${CSS.dropdownLink}"
								${Attr.section}="${Section.settings}"
							>
								${App.text('fieldsSettings')}
							</am-switcher-link>
							<am-switcher-link
								class="${CSS.dropdownLink}"
								${Attr.section}="${Section.text}"
							>
								${App.text('fieldsContent')}
							</am-switcher-link>
							<am-switcher-link
								class="${CSS.dropdownLink}"
								${Attr.section}="${Section.colors}"
							>
								${App.text('fieldsColors')}
							</am-switcher-link>
							<am-switcher-link
								class="${CSS.dropdownLink}"
								${Attr.section}="${Section.files}"
							>
								${App.text('uploadedFiles')}
							</am-switcher-link>
						</div>
					</am-dropdown>
				</am-switcher>
				<am-filter placeholder="filterContent"></am-filter>
				<am-private-indicator
					class="${CSS.displaySmallNone}"
				></am-private-indicator>
				${renderDropdown()}
			</div>
		</section>
	`;
};

/**
 * The page view.
 *
 * @extends BaseDashboardLayoutComponent
 */
export class PageComponent extends BaseDashboardLayoutComponent {
	/**
	 * Set the page title that is used a document title suffix.
	 */
	protected get pageTitle(): string {
		return getPageURL();
	}

	/**
	 * Render the main partial.
	 *
	 * @returns the rendered HTML
	 */
	protected renderMainPartial(): string {
		return html`
			${renderBreadcrumbs()}${renderMenu()}
			<section class="${CSS.layoutDashboardSection}">
				<div class="${CSS.layoutDashboardContent}">
					<am-page-data-form
						${Attr.api}="Page/data"
					></am-page-data-form>
					<am-switcher-section name="${Section.files}">
						<am-upload></am-upload>
						<div class="${CSS.flex} ${CSS.flexGap}">
							<am-modal-toggle
								class="${CSS.button} ${CSS.buttonAccent}"
								${Attr.modal}="#am-file-import-modal"
							>
								${App.text('importFromUrl')}
							</am-modal-toggle>
							<am-file-collection-submit
								class="${CSS.button} ${CSS.buttonPrimary}"
								${Attr.form}="FileCollection/list"
							>
								${App.text('deleteSelected')}
							</am-file-collection-submit>
						</div>
						<am-file-collection-list-form
							${Attr.confirm}="${App.text(
								'confirmDeleteSelectedFiles'
							)}"
							${Attr.api}="FileCollection/list"
						></am-file-collection-list-form>
					</am-switcher-section>
				</div>
			</section>
			${renderMovePageModal()}${renderFileImportModal()}
			${renderHistoryModal()}
		`;
	}
}

customElements.define(getTagFromRoute(Route.page), PageComponent);
