# vue_task
Создать 2 компонента, на входе которых объект типа

{
  name: 'root',
  selected: false,
  childred: [
    {
	  name: 'item1',
	  selected: true,
	  children: [
		....
	  ]
	},
	{
	  name: 'item2',
	  seelcted: false
	  children: [
		....
	  ]
	},
	...		
  ]
}

1-й компонент отображает списком все элементы, у которых selected = true. Из него можно удалить любой элемент (у элемента кнопка х - удалить) - при этом у элемента selected становится false.

2-й компонет отображает объект в виде дерева, у каждого узла слева чекбокс (checked в зависимости от selected). У узла можно менять статус (checked/unchecked).
Состояние обоих компонент должно быть синхронизировано - все checked в дереве должны отображаться в списке, в списке не может быть не checked в дереве элементов.
Оба компонента должны отображаться одновременно на странице.
