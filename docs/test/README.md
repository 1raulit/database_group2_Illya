# Тестування працездатності системи

*В цьому розділі необхідно вказати засоби тестування, навести вихідні коди тестів та результати тестування.*
*Тестування виконується за допомогою Postman*

## Запуск сервера

![](./Photos/server_start.png)

## Тестування GET

### Отримати всіх користувачів

#### Запит:
![](./Photos/get_all_datafiles.png)

#### Результат:
![](./Photos/get_all_datafiles_result.png)

### Отримати користувача по id

#### Запит:
![](./Photos/get_datafile_by_id.png)

#### Результат:
![](./Photos/get_datafile_by_id_result.png)

## Тестування POST

### Додати користувача

#### Запит:
![](./Photos/add_datafile_id4.png)

#### Результат:
![](./Photos/add_datafile_id4_result.png)

#### Перевірка за допомогою GET:
![](./Photos/get_datafile_id4.png)

![](./Photos/get_datafile_id4_result.png)

## Тестування PUT

### Змінити користувача по id

#### Запит:
![](./Photos/update_datafile_id4.png)

#### Результат:
![](./Photos/update_datafile_id4_result.png)

#### Перевірка за допомогою GET:
![](./Photos/get_updated_datafile_id4.png)

![](./Photos/get_updated_datafile_id4_result.png)

## Тестування DELETE

### Видалити користувача по id

#### Запит:
![](./Photos/delete_datafile_id2.png)

#### Результат:
![](./Photos/delete_datafile_id2_result.png)

#### Перевірка за допомогою GET:
![](./Photos/get_all_updated_datafiles.png)

![](./Photos/get_all_updated_datafiles_result.png)
