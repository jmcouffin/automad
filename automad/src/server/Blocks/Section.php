<?php
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
 * https://automad.org/license
 */

namespace Automad\Blocks;

use Automad\Core\Automad;
use Automad\Core\Blocks;

defined('AUTOMAD') or die('Direct access not permitted!');

/**
 * The section editor block.
 *
 * @author Marc Anton Dahmen
 * @copyright Copyright (c) 2021-2023 by Marc Anton Dahmen - https://marcdahmen.de
 * @license MIT license - https://automad.org/license
 */
class Section extends AbstractBlock {
	/**
	 * Render a section editor block.
	 *
	 * @param object{id: string, data: object, tunes: object} $block
	 * @param Automad $Automad
	 * @return string the rendered HTML
	 */
	public static function render(object $block, Automad $Automad): string {
		$data = $block->data;
		$html = '';

		if ($data->content) {
			$html = Blocks::render($data->content, $Automad);
		}

		$defaultStyles = array(
			'backgroundColor' => '',
			'backgroundBlendMode' => '',
			'borderWidth' => '0px',
			'borderRadius' => '',
			'borderStyle' => '',
			'paddingTop' => '',
			'paddingBottom' => ''
		);

		$classes = array();
		$styles = array_intersect_key(
			array_filter(array_merge($defaultStyles, array_filter((array) $data->style))),
			$defaultStyles
		);

		if (!empty($data->gap)) {
			$styles['--am-flex-gap'] = $data->gap;
		}

		if (!empty($data->minBlockWidth)) {
			$styles['--am-flex-min-block-width'] = $data->minBlockWidth;
		}

		if (!empty($data->justify)) {
			$classes[] = "am-justify-{$data->justify}";
		}

		if (!empty($data->align)) {
			$classes[] = "am-align-{$data->align}";
		}

		if (!empty($data->style)) {
			if (!empty($data->style->backgroundImage)) {
				$styles['backgroundImage'] = "url('{$data->style->backgroundImage}')";
			}

			if (!empty($data->style->overflowHidden)) {
				$styles['overflow'] = 'hidden';
			}

			if (!empty($data->style->matchRowHeight)) {
				$styles['height'] = '100%';
			}

			if (!empty($data->style->shadow)) {
				$styles['boxShadow'] = 'var(--am-section-shadow)';
			}

			if (!empty($data->style->color)) {
				$styles['--am-section-color'] = $data->style->color;
			}

			if (!empty($data->style->borderColor)) {
				$styles['--am-section-border-color'] = $data->style->borderColor;
			}

			if (!empty($data->style->card)) {
				$classes[] = 'am-card';
			}
		}

		$attr = self::attr($block->tunes, $classes, $styles);

		return <<< HTML
			<am-section $attr>
				$html
			</am-section>
		HTML;
	}
}
