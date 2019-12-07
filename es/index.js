import mock from './lib/mock';
import config from './lib/config';
import renderDraft from 'dom-draft-js-renderer/es';


document.body.appendChild(renderDraft(mock, config));

