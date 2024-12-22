import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;


class RegisterScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Register')),
      body: Center(
        child: Text('Registration Form Here'),
      ),
    );
  }
}
