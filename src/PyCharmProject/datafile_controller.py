from flask import request, jsonify
from datafile_model import Datafile
from app_init import app

datafile = Datafile()

@app.route("/datafiles", methods=['GET'])
def get_all_datafiles():
    return jsonify(datafile.get_all_datafiles())


@app.route("/datafiles/<datafile_id>", methods=['GET'])
def get_datafile_by_id(datafile_id):
    return jsonify(datafile.get_datafile_by_id(datafile_id))


@app.route("/datafiles/add", methods=['POST'])
def add_datafile():
    url_params = request.args.to_dict()
    return jsonify(datafile.add_datafile(url_params))


@app.route("/datafiles/delete/<datafile_id>", methods=['DELETE'])
def delete_datafile(datafile_id):
    return jsonify(datafile.delete_datafile(datafile_id))


@app.route("/datafiles/update/<datafile_id>", methods=['PUT'])
def update_datafile(datafile_id):
    url_params = request.args.to_dict()
    return jsonify(datafile.update_datafile(datafile_id, url_params))