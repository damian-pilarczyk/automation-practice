// eslint-disable-next-line @typescript-eslint/naming-convention
import { Func } from 'mocha';
import { TestCategory } from './test-categories';

interface SpecFuntion {
    (cat: TestCategory, title: string, fn: Func): void;
    skip(cat: TestCategory, title: string, fn: Func): void; 
    only(cat: TestCategory, title: string, fn: Func): void; 
}

const spec = ((cat: TestCategory, title: string, fn: Func): void => {
    it(title, fn);
}) as SpecFuntion;

spec.skip = (cat: TestCategory, title: string, fn: Func): void => {
    it.skip(title, fn);
};

spec.only = (cat: TestCategory, title: string, fn: Func): void => {
    it.only(title, fn);
};

export { spec, SpecFuntion };
