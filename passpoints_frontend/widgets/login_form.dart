import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;


class LoginForm extends StatelessWidget {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passpointController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        TextField(
          controller: emailController,
          decoration: InputDecoration(labelText: 'Email'),
        ),
        TextField(
          controller: passpointController,
          decoration: InputDecoration(labelText: 'PassPoints Password'),
          obscureText: true,
        ),
        SizedBox(height: 20),
        ElevatedButton(
          onPressed: () {
            // Call the API to authenticate the user
          },
          child: Text('Login'),
        ),
      ],
    );
  }
}
