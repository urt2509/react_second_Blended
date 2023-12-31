# TODO LIST

- Напиши застосунок зберігання todo-листів.
- Використовуй методи життєвого циклу.
- Під час додавання та видалення контакту контакти зберігаються у
  `localStorage`.
- Під час завантаження застосунку todo-листа, якщо такі є, зчитуються з
  локального сховища і записуються у `state`.

## Крок 1

Застосунок повинен складатися з форми і списку todo-листів. На поточному кроці
реалізуй додавання тудушки та відображення їх списку. Застосунок повинен
зберігати тудушки між різними сесіями (оновлення сторінки).

Використовуйте готову структуру форми з попередньго таска: компонент
`<SearchForm/>` приймає один проп `onSubmit` - функцію для передачі значення
інпута під час сабміту форми.

```jsx
<SearchFormStyled>
  <FormBtn type="submit">
    <FiSearch size="16px" />
  </FormBtn>
  <InputSearch
    placeholder="What do you want to write?"
    name="search"
    required
    autoFocus
  />
</SearchFormStyled>
```

`state`, що зберігається в батьківському компоненті `<Todos/>`, обов'язково
повинен бути наступного вигляду.

```bash
state = {
  todos: [],
}
```

Кожна todo повинна бути об'єктом з властивостями `text` та `id`. Для генерації
ідентифікаторів використовуй будь-який відповідний пакет, наприклад
[nanoid](https://www.npmjs.com/package/nanoid). Після завершення цього кроку,
застосунок повинен виглядати приблизно так.

[![preview](https://i.gyazo.com/de0115918db7d989fbdc10f1744c11c3.png)](https://gyazo.com/de0115918db7d989fbdc10f1744c11c3)

### Опис компонента галереї `<Grid/>`

Список карток тудушок. Створює компонент наступної структури.

```jsx
<Grid>{/* Набір <GridItem ></CardItem> із тудушками */}</Grid>
```

### Опис компонента `<GridItem/>`

Компонент елемента тудушки. Створює компонент наступної структури.

```jsx
<GridItem>
  <Todo />
</GridItem>
```

### Опис компонента `<Todo/>`

Компонент тудушки. Створює компонент наступної структури.

```jsx
<TodoWrapper>
  <Text textAlign="center" marginBottom="20px">
    TODO #1
  </Text>
  <Text>Some description</Text>
  <DeleteButton type="button">
    <RiDeleteBinLine size={24} />
  </DeleteButton>
</TodoWrapper>
```

Кореневий компонент програми виглядатиме так.

```jsx
<SearchForm />
  <Grid>
    <GridItem>
      <Todo/>
    </GridItem>
  </Grid>
```

## Крок 2

Розшир функціонал застосунку, дозволивши користувачеві видаляти раніше збережені
тудушки.

[![preview](https://i.gyazo.com/8bf303fed0163b544d5c2314fe1df133.gif)](https://gyazo.com/8bf303fed0163b544d5c2314fe1df133)


Щоб відкрити код на гітхаб для внесення змін в код без ВС коду, натисні крапку . на клавіатурі. 