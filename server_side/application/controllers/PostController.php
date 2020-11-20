<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class PostController extends CI_Controller {

	public function __construct()
	{
		parent::__construct();		
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-Random, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
	}

	public function index()
	{
		
		$headers = apache_request_headers();
		$body = $this->input->post('body');

		foreach ($headers as $header => $value) {
				echo "$header: $value <br />\n";
		}
		log_message('info', '');
	}

}
