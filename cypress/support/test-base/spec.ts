import { Func } from 'mocha';
import { activeTestCategories } from '../consts/cypress-env-vars-names';
import { TestCategory } from './test-categories';

interface SpecFuntion {
    (cat: TestCategory, title: string, fn: Func): void;
    skip(cat: TestCategory, title: string, fn: Func): void; 
    only(cat: TestCategory, title: string, fn: Func): void; 
}

const specBase = (cat: TestCategory, title: string, fn: Func, testFunc: any): void => {
    const envCategory = TestCategory[String(Cypress.env(activeTestCategories)).toLowerCase() as keyof typeof TestCategory];
    if (envCategory) {
        if (cat <= envCategory) {
            testFunc(title, fn);
        }        
    } else {
        testFunc(title, fn);
    }
    
};

const spec = ((cat: TestCategory, title: string, fn: Func): void => {
    specBase(cat, title, fn, it);
}) as SpecFuntion;

spec.skip = (cat: TestCategory, title: string, fn: Func): void => {
    specBase(cat, title, fn, it.skip);
};

spec.only = (cat: TestCategory, title: string, fn: Func): void => {
    specBase(cat, title, fn, it.only);
};

export { spec, SpecFuntion };
