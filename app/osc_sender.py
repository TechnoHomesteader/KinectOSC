from pythonosc import udp_client

class OSCSender:
    def __init__(self, ip, port):
        self.ip = ip
        self.port = port
        self.client = udp_client.SimpleUDPClient(ip, port)

    def update_ip(self, ip):
        self.ip = ip
        self.client = udp_client.SimpleUDPClient(ip, self.port)

    def update_port(self, port):
        self.port = port
        self.client = udp_client.SimpleUDPClient(self.ip, port)

    def send(self, address, *args):
        self.client.send_message(address, args)
