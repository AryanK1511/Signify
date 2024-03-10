import socket
import json

# Function to send a command to a WiZ light bulb
def send_command(ip, port, command):
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)  # Internet, UDP
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.settimeout(2)  # Set a timeout for the socket
    message = json.dumps(command).encode()
    sock.sendto(message, (ip, port))
    try:
        data, server = sock.recvfrom(4096)
        print(data.decode())
    except socket.timeout:
        print("Timed out waiting for a response")
    sock.close()

light_ip = '172.20.10.4'
light_port = 38899  # Default port used by WiZ lights

# Command to turn the light on
turn_on_command = {
    "method": "setPilot",
    "params": {
        "state": True
    }
}

# Command to turn the light off
turn_off_command = {
    "method": "setPilot",
    "params": {
        "state": False
    }
}

# Example: Turning the light on
send_command(light_ip, light_port, turn_on_command)
