import { template } from '../template';

describe('template', () => {
    test('Should correctly return HTML string', () => {
        const html = template('<div id="elementId" class="{{ cls }}">{{ text }}</div>', {
            cls: 'test',
            text: 'TEXT'
        });

        expect(html).toBe('<div id="elementId" class="test">TEXT</div>');
    });
});
