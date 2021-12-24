// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/// <reference types="Cypress" />
import './commands/user-commands';
import { spec } from './test-base/spec';
import { SpecFuntion } from '../support/test-base/spec';
import { TestCategory } from './test-base/test-categories';
import { TestSection } from './test-base/test-sections';
import { desktopContext, desktopLoginContext } from './test-base/contexts';

declare global {
    const testCategory: typeof TestCategory;
    const section: typeof TestSection;
    const spec: SpecFuntion;
    function desktopContext (testSection: TestSection, callback: (homePage: Home) => void): void;
    function desktopLoginContext (testSection: TestSection, callback: (homePage: Home) => void): void;
}

globalThis.testCategory = TestCategory;
globalThis.section = TestSection;
globalThis.spec = spec;
globalThis.desktopContext = desktopContext;
globalThis.desktopLoginContext = desktopLoginContext;
