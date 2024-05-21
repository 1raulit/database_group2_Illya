# Тестування працездатності системи

*В цьому розділі необхідно вказати засоби тестування, навести вихідні коди тестів та результати тестування.*
*Тестування виконується за допомогою Postman*

## Запуск сервера

![](./photos/server_start.png)

## Тестування GET

### Отримати всіх користувачів

#### Запит:
![](./photos/get_all_datafiles.png)

#### Результат:
![](./photos/get_all_datafiles_result.png)

### Отримати користувача по id

#### Запит:
![](./photos/get_datafile_by_id.png)

#### Результат:
![](./photos/get_datafile_by_id_result.png)

## Тестування POST

### Додати користувача

#### Запит:
![](./photos/add_datafile_id4.png)

#### Результат:
![](./photos/add_datafile_id4_result.png)

#### Перевірка за допомогою GET:
![](./photos/get_datafile_id4.png)

![](./photos/get_datafile_id4_result.png)

## Тестування PUT

### Змінити користувача по id

#### Запит:
![](./photos/update_datafile_id4.png)

#### Результат:
![](./photos/update_datafile_id4_result.png)

#### Перевірка за допомогою GET:
![](./photos/get_updated_datafile_id4.png)

![](./photos/get_updated_datafile_id4_result.png)

## Тестування DELETE

### Видалити користувача по id

#### Запит:
![](./photos/delete_datafile_id2.png)

#### Результат:
![](./photos/delete_datafile_id2_result.png)

#### Перевірка за допомогою GET:
![](./photos/get_all_updated_datafiles.png)

![](./photos/get_all_updated_datafiles_result.png)
