import { Selector } from "testcafe";

fixture("Todo Test One")
    .page("https://verycookedhotel.dk/test/todo/")
    .beforeEach(async t => {
        await t.maximizeWindow(); 
    });

test("Adding todo", async t => {
    await t
        .typeText(Selector("#todo-input"), "Now i click instead of enter")
        .click(Selector("#addTodoButton"))
        .typeText(Selector("#todo-input"), "Now i enter")
        .pressKey("enter")
});
