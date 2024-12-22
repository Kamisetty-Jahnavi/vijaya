import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;


class DashboardScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Dashboard')),
      body: Center(
        child: Text('Welcome to your Dashboard!'),
      ),
    );
  }
}
