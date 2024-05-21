import mysql.connector

class Datafile:
    def __init__(self):
        try:
            self.host = 'localhost'
            self.user = 'root'
            self.password = '1234567890'
            self.db = 'mydb'

            self.connection = mysql.connector.connect(host=self.host,
                                                      user=self.user,
                                                      password=self.password,
                                                      database=self.db)

            self.cursor = self.connection.cursor(dictionary=True)
            print("Successful connection to database")
        except mysql.connector.Error as err:
            print("Failed to connect to database:", err)

    def get_all_datafiles(self):
        try:
            self.cursor.execute("select * from datafile")
            datafiles = self.cursor.fetchall()

            if self.cursor.rowcount == 0:
                return {"message": "No datafiles", "error": "Not Found", "status_code": 404}

            return datafiles
        except mysql.connector.Error as err:
            return {'message': 'Failed to get all datafiles', 'error': str(err), 'status_code': 500}

    def get_datafile_by_id(self, datafile_id):
        try:
            datafile_id = int(datafile_id)
            self.cursor.execute("select * from datafile where `datafile.id` = %s", (datafile_id,))
            datafile = self.cursor.fetchone()

            if self.cursor.rowcount == 0:
                return {"message": f"No datafile with id {datafile_id}", "error": "Not Found", "status_code": 404}

            return datafile
        except mysql.connector.Error as err:
            return {'message': 'Failed to get datafile', 'error': str(err), 'status_code': 500}
        except ValueError:
            return {"message": "Invalid datafile id", "error": "Bad Request", "status_code": 400}

    def add_datafile(self, url_params):
        try:
            self.cursor.execute('start transaction')
            self.cursor.execute(f"insert into datafile (`Datafile.id`, `Datafile.name`, `Datafile.content`,"
                                f"`Datafile.description`, `Datafile.format`, `Datafile.date`)"
                                f"values {tuple([i for i in url_params.values()])}")
            self.connection.commit()

            if self.cursor.rowcount > 0:
                return {"message": "datafile added to database", "status_code": 200}
            else:
                return {"message": "datafile was not added to database", "error": "Not Acceptable", "status_code": 406}
        except mysql.connector.Error as err:
            self.connection.rollback()
            return {'message': 'Failed to add datafile', 'error': str(err), 'status_code': 500}

    def delete_datafile(self, datafile_id):
        try:
            datafile_id = int(datafile_id)
            self.cursor.execute('start transaction')
            rows_deleted = 0
            self.cursor.execute("delete from datafile_tag where `Datafile_Datafile.id` = %s", (datafile_id,))
            rows_deleted += self.cursor.rowcount
            self.cursor.execute("select `Access.id` from access where `Datafile_Datafile.id` = %s", (datafile_id,))
            access_id = [i for i in self.cursor.fetchone().values()][0]
            self.cursor.execute("delete from request where `Access_Access.id` = %s", (access_id,))
            rows_deleted += self.cursor.rowcount
            self.cursor.execute("delete from access where `Datafile_Datafile.id` = %s", (datafile_id,))
            rows_deleted += self.cursor.rowcount
            self.cursor.execute("delete from datafile where `Datafile.id` = %s", (datafile_id,))
            rows_deleted += self.cursor.rowcount
            self.connection.commit()
            if rows_deleted > 0:
                return {"message": f"Datafile {datafile_id} deleted from database", "status_code": 204}
            else:
                return {"message": f"Datafile {datafile_id} was not deleted from database",
                        "error": "Not Found", "status_code": 404}
        except mysql.connector.Error as err:
            self.connection.rollback()
            return {'message': 'Failed to delete datafile', 'error': str(err), 'status_code': 500}
        except ValueError:
            return {"message": "Invalid datafile id", "error": "Bad Request", "status_code": 400}

    def update_datafile(self, datafile_id, url_params):
        try:
            datafile_id = int(datafile_id)
            self.cursor.execute('start transaction')
            update_rows = 0
            for i in url_params.items():
                self.cursor.execute(f"update datafile set `{i[0]}` = '{i[1]}' where `Datafile.id` = {datafile_id}")
                update_rows += 1
            self.connection.commit()

            if update_rows > 0:
                return {"message": f"Datafile {datafile_id} updated in database", "status_code": 200}
            else:
                return {"message": f"Datafile {datafile_id} was not updated in database",
                        "error": "Not Acceptable", "status_code": 406}
        except mysql.connector.Error as err:
            self.connection.rollback()
            return {'message': 'Failed to update datafile', 'error': str(err), 'status_code': 500}
        except ValueError:
            return {"message": "Invalid datafile id", "error": "Bad Request", "status_code": 400}