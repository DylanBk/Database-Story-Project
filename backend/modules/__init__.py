import bcrypt
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import os
from . import db_functions as db