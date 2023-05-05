import sys
import time
from pyk4a import PyK4A, K4AConfig, K4ABTConfig, PyK4ABT
from pythonosc import udp_client
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

config = K4AConfig(
    color_resolution=pyk4a.ColorResolution.RES_720P,
    depth_mode=pyk4a.DepthMode.NFOV_UNBINNED,
    synchronized_images_only=True,
)

tracker_config = K4ABTConfig(sensor_orientation=pyk4abt.SensorOrientation.DEFAULT)

k4a = PyK4A(config=config)
k4a.start()
k4abt = PyK4ABT(tracker_config)

osc_ip = "127.0.0.1"
osc_port = 5005
osc_client = udp_client.SimpleUDPClient(osc_ip, osc_port)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/update_osc_settings', methods=['POST'])
def update_osc_settings():
    global osc_ip, osc_port, osc_client
    osc_ip = request.form['ip']
    osc_port = int(request.form['port'])
    osc_client = udp_client.SimpleUDPClient(osc_ip, osc_port)
    return 'OK', 200

@app.route('/start', methods=['POST'])
def start_sending():
    mode = request.form['mode']
    frequency = float(request.form['frequency'])
    if mode == 'passthrough':
        send_passthrough_data(frequency)
    elif mode == 'advanced':
        data_points = request.form.getlist('data_points[]')
        send_advanced_data(frequency, data_points)
    elif mode == 'simple':
        player_indexes = request.form.getlist('player_indexes[]')
        hand_distance = float(request.form['hand_distance'])
        player_distance = float(request.form['player_distance'])
        send_basic_data(frequency, player_indexes, hand_distance, player_distance)
    return 'OK', 200

def send_passthrough_data(frequency):
    # Your implementation
    pass

def send_advanced_data(frequency, data_points):
    # Your implementation
    pass

def send_basic_data(frequency, player_indexes, hand_distance, player_distance):
    # Your implementation
    pass

@app.route('/camera_status', methods=['GET'])
def camera_status():
    if k4a.device_is_connected():
        return jsonify(status=True)
    else:
        return jsonify(status=False)

if __name__ == '__main__':
    app.run(debug=True)
