import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { SrearchAndShortList } from "./components/SrearchAndShortList";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";
import { puppies } from "./data/puppies";
export function App() {
    return (_jsx(PageWrapper, { children: _jsxs(Container, { children: [_jsx(Header, {}), _jsx(Main, {})] }) }));
}
function Main() {
    return (_jsxs("main", { children: [_jsx(SrearchAndShortList, {}), _jsx(PuppiesList, { puppies: puppies }), _jsx(NewPuppyForm, {})] }));
}
